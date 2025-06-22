#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import boxen from 'boxen';
import fs from 'fs';
import path from 'path';

class MbotixEmailGenerator {
    constructor() {
        this.emailCombinations = [];
        this.startTime = null;
    }

    async showBanner() {
        console.clear();
        
        const banner = figlet.textSync('MbotixTECH', {
            font: 'Big',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        });

        console.log(chalk.cyan.bold(banner));
        
        const subtitle = boxen(
            chalk.yellow.bold('🚀 Gmail Dot Combination Generator 🚀\n') +
            chalk.white('Generate all possible email combinations with dots'),
            {
                padding: 1,
                margin: 1,
                borderStyle: 'round',
                borderColor: 'cyan',
                backgroundColor: 'black'
            }
        );
        
        console.log(subtitle);
        
        await this.showLoadingAnimation();
    }

    async showLoadingAnimation() {
        const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
        let i = 0;
        
        process.stdout.write(chalk.blue.bold('\n🔄 Initializing MbotixTECH Generator '));
        
        const interval = setInterval(() => {
            process.stdout.write(`\r🔄 Initializing MbotixTECH Generator ${chalk.cyan(frames[i])}`);
            i = (i + 1) % frames.length;
        }, 100);

        await new Promise(resolve => setTimeout(resolve, 2000));
        clearInterval(interval);
        process.stdout.write('\r✅ MbotixTECH Generator Ready!                    \n\n');
    }

    async getUserInput() {
        const questions = [
            {
                type: 'input',
                name: 'email',
                message: chalk.yellow.bold('📧 Masukkan email Gmail utama:'),
                validate: (input) => {
                    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
                    if (!emailRegex.test(input)) {
                        return chalk.red('❌ Format email tidak valid! Contoh: mbotixtech@gmail.com');
                    }
                    return true;
                },
                filter: (input) => input.trim().toLowerCase()
            },
            {
                type: 'number',
                name: 'maxCombinations',
                message: chalk.yellow.bold('🔢 Berapa banyak kombinasi yang ingin di-generate?'),
                validate: (input) => {
                    if (isNaN(input) || input < 1) {
                        return chalk.red('❌ Masukkan angka yang valid (minimal 1)!');
                    }
                    if (input > 1000) {
                        return chalk.red('❌ Maksimal 1000 kombinasi untuk performa optimal!');
                    }
                    return true;
                },
                default: 50
            }
        ];

        const answers = await inquirer.prompt(questions);
        return answers;
    }

    generateDotCombinations(username, maxCombinations) {
        const combinations = new Set();
        const usernameLength = username.length;
        
        if (usernameLength < 2) {
            combinations.add(username);
            return Array.from(combinations);
        }

        const totalPossibleCombinations = Math.pow(2, usernameLength - 1);
        
        for (let i = 0; i < Math.min(totalPossibleCombinations, maxCombinations); i++) {
            let newUsername = '';
            let binaryString = i.toString(2).padStart(usernameLength - 1, '0');
            
            for (let j = 0; j < usernameLength; j++) {
                newUsername += username[j];
                if (j < usernameLength - 1 && binaryString[j] === '1') {
                    newUsername += '.';
                }
            }
            
            combinations.add(newUsername);
        }

        return Array.from(combinations);
    }

    showProgress(current, total) {
        const percentage = Math.round((current / total) * 100);
        const progressBarLength = 30;
        const filledLength = Math.round((progressBarLength * current) / total);
        const bar = '█'.repeat(filledLength) + '░'.repeat(progressBarLength - filledLength);
        
        process.stdout.write(`\r${chalk.blue('Progress:')} [${chalk.green(bar)}] ${chalk.yellow.bold(percentage + '%')} (${current}/${total})`);
    }

    async generateEmails(email, maxCombinations) {
        this.startTime = Date.now();
        
        console.log(chalk.cyan.bold('\n🔧 Memproses email kombinasi...\n'));

        const [username, domain] = email.split('@');

        const usernameCombinations = this.generateDotCombinations(username, maxCombinations);
        
        let processed = 0;
        const total = usernameCombinations.length;
        
        for (const combo of usernameCombinations) {
            const fullEmail = `${combo}@${domain}`;
            this.emailCombinations.push(fullEmail);
            
            processed++;
            this.showProgress(processed, total);
            
            await new Promise(resolve => setTimeout(resolve, 10));
        }
        
        console.log('\n');
    }

    async saveToFile() {
        let content = '';

        this.emailCombinations.forEach((email) => {
            content += `${email}\n`;
        });

        try {
            await fs.promises.writeFile('result.txt', content, 'utf8');
            return true;
        } catch (error) {
            console.error(chalk.red('❌ Error saving file:', error.message));
            return false;
        }
    }

    displayResults() {
        const processingTime = ((Date.now() - this.startTime) / 1000).toFixed(2);
        
        console.log(chalk.green.bold('\n✅ Proses selesai!\n'));
        
        const resultBox = boxen(
            chalk.white.bold('📊 HASIL GENERATE EMAIL\n\n') +
            chalk.cyan(`🔢 Total kombinasi: ${chalk.yellow.bold(this.emailCombinations.length)}\n`) +
            chalk.cyan(`⏱️  Waktu proses: ${chalk.yellow.bold(processingTime + ' detik')}\n`) +
            chalk.cyan(`📁 File tersimpan: ${chalk.yellow.bold('result.txt')}\n\n`) +
            chalk.green('✨ Semua kombinasi berhasil di-generate!'),
            {
                padding: 1,
                margin: 1,
                borderStyle: 'double',
                borderColor: 'green',
                backgroundColor: 'black'
            }
        );
        
        console.log(resultBox);
        
        console.log(chalk.blue.bold('\n📋 Preview hasil (5 pertama):'));
        console.log(chalk.gray('─'.repeat(50)));
        
        this.emailCombinations.slice(0, 5).forEach((email, index) => {
            console.log(chalk.white(`${(index + 1).toString().padStart(2, ' ')}. `) + chalk.cyan.bold(email));
        });
        
        if (this.emailCombinations.length > 5) {
            console.log(chalk.gray(`... dan ${this.emailCombinations.length - 5} kombinasi lainnya`));
        }
        
        console.log(chalk.gray('─'.repeat(50)));
    }

    showThankYouMessage() {
        const thankYouBox = boxen(
            chalk.magenta.bold('🎉 TERIMA KASIH! 🎉\n\n') +
            chalk.white('Telah menggunakan MbotixTECH Email Generator\n') +
            chalk.cyan('Follow kami untuk tools menarik lainnya!\n\n') +
            chalk.yellow('📧 Contact: mbotixtech@gmail.com\n') +
            chalk.yellow('🌐 Website: mbotix.tech\n') +
            chalk.yellow('🐙 GitHub: https://github.com/MbotixTech'),
            {
                padding: 1,
                margin: 1,
                borderStyle: 'round',
                borderColor: 'magenta',
                textAlignment: 'center'
            }
        );
        
        console.log(thankYouBox);
    }

    async run() {
        try {
            await this.showBanner();
            
            const { email, maxCombinations } = await this.getUserInput();

            await this.generateEmails(email, maxCombinations);
            
            const saved = await this.saveToFile();
            
            if (saved) {
                this.displayResults();
                
                this.showThankYouMessage();
            } else {
                console.log(chalk.red.bold('\n❌ Gagal menyimpan file!'));
            }
            
        } catch (error) {
            console.error(chalk.red.bold('\n❌ Terjadi error:'), error.message);
            
            const errorBox = boxen(
                chalk.red.bold('💥 ERROR OCCURRED!\n\n') +
                chalk.white(error.message + '\n\n') +
                chalk.yellow('Silakan coba lagi atau hubungi support MbotixTECH'),
                {
                    padding: 1,
                    margin: 1,
                    borderStyle: 'round',
                    borderColor: 'red'
                }
            );
            
            console.log(errorBox);
        }
    }
}

const generator = new MbotixEmailGenerator();
generator.run();
