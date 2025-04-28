const { spawn } = require('child_process');

const predictChatbotResponse = (message) => {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python3', ['nlp/chatbot_model.py'], {
            stdio: ['pipe', 'pipe', 'pipe']
        });

        let result = '';
        let errorOutput = '';

        // Listen for output
        pythonProcess.stdout.on('data', (data) => {
            result += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            errorOutput += data.toString();
        });

        pythonProcess.on('close', (code) => {
            if (code !== 0) {
                console.error(`Python process exited with code ${code}`);
                console.error(errorOutput);
                reject(new Error('Python script error'));
            } else {
                resolve(result.trim());
            }
        });

        // Write the message safely to Python's stdin
        pythonProcess.stdin.write(message + '\n');
        pythonProcess.stdin.end();
    });
};

module.exports = {
    predictChatbotResponse,
};