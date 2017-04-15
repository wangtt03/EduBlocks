"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var express = require("express");
var expressWs = require("express-ws");
var child_process_1 = require("child_process");
var readline = require("readline");
var bodyParser = require("body-parser");
var ui = path.join(__dirname, '..', 'ui');
var runtimeSupportPath = path.join(__dirname, '..', 'runtime_support.py');
var scriptPath = path.join(__dirname, '..', 'tmp', 'output.py');
var packagePath = path.join(__dirname, 'package.json');
var app = express();
// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
expressWs(app);
var proc;
var lineReporter;
var inputFeed;
app.post('/runcode', function (req, res) {
    var code = req.body.code;
    var runtimeSupport = fs.readFileSync(runtimeSupportPath);
    fs.writeFileSync(scriptPath, runtimeSupport + code);
    // Kill the last process if it is still running...
    if (proc) {
        proc.kill('SIGTERM');
    }
    proc = child_process_1.spawn('python3', ['-u', scriptPath], { stdio: ['pipe', 'pipe', 'pipe'] });
    console.log(code);
    var rl = readline.createInterface({
        input: proc.stdout,
    });
    rl.on('line', function (input) {
        console.log("LINE: " + input);
        if (lineReporter) {
            lineReporter(input);
        }
    });
    proc.stderr.on('data', function (data) {
        console.log("stderr: " + data);
        if (lineReporter) {
            lineReporter('ERROR: ' + data);
        }
    });
    proc.on('close', function (code) {
        if (lineReporter) {
            lineReporter("==== Process complete (" + code + ") ====");
        }
        res.send("Done " + code);
    });
    inputFeed = function (inp) {
        try {
            // Ctrl-C should kill process
            if (inp.length === 1 && inp[0] === String.fromCharCode(3)) {
                proc.kill('SIGTERM');
            }
            else {
                // Echo the send command back to the client
                if (lineReporter) {
                    lineReporter(inp);
                }
                // Need to add new line character on end
                proc.stdin.write(inp + '\n');
            }
        }
        catch (e) { }
    };
});
app.ws('/terminal', function (ws, req) {
    lineReporter = function (msg) {
        try {
            ws.send(msg);
        }
        catch (e) { }
    };
    var version = JSON.parse(fs.readFileSync(packagePath, 'utf8')).version;
    ws.send("EduBlocks server version " + version + " online and ready");
    ws.on('message', function (msg) {
        console.log("INP: " + msg);
        if (inputFeed) {
            inputFeed(msg);
        }
    });
});
app.use(express.static(ui));
app.listen(8081, function () {
    console.log('EduBlocks server now listening on port 8081!');
});
//# sourceMappingURL=/home/pi/edublocks/server/ts-node-1fc90f464345a82d8eb8eee0683b64cadfb994e7/04f9aeff6a606d4b5beb471b79c81386b823982e/72df53266c6a26034bfbcd7a420bb1eb65def5f7.js.map