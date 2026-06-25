const fs = require('fs');
const content = fs.readFileSync('src/pages/dashboard/AdminDashboard.jsx', 'utf8');
const lines = content.split('\n');

let braces = 0, parens = 0;
let inString = false, stringChar = '';
let inTemplate = 0;
let braceStack = [], parenStack = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    const ch = line[j];
    const prev = j > 0 ? line[j-1] : '';

    if (inString) {
      if (ch === stringChar && prev !== '\\') inString = false;
      continue;
    }

    if (ch === '"' || ch === "'") { inString = true; stringChar = ch; continue; }
    if (ch === '`') { inTemplate += (inTemplate === 0 ? 1 : -1); continue; }
    if (inTemplate > 0) continue;

    if (ch === '{') { braces++; braceStack.push(i+1); }
    else if (ch === '}') { braces--; if (braceStack.length) braceStack.pop(); }
    else if (ch === '(') { parens++; parenStack.push(i+1); }
    else if (ch === ')') { parens--; if (parenStack.length) parenStack.pop(); }
  }
}

console.log('Unclosed braces:', braces, '- Opened at lines:', braceStack.slice(-10));
console.log('Unclosed parens:', parens, '- Opened at lines:', parenStack.slice(-10));
