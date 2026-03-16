(function() {
    var inputEl = document.getElementById('minInput');
    var outputEl = document.getElementById('minOutput');
    var statsEl = document.getElementById('minStats');
    var runBtn = document.getElementById('minRun');
    var copyBtn = document.getElementById('minCopy');
    var clearBtn = document.getElementById('minClear');

    function minifyHTML(html) {
        return html
            .replace(/<!--(?!\[if)[\s\S]*?-->/g, '')
            .replace(/\s+/g, ' ')
            .replace(/>\s+</g, '><')
            .replace(/\s+>/g, '>')
            .replace(/>\s+/g, '>')
            .replace(/\s+</g, '<')
            .trim();
    }

    function formatSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        return (bytes / 1024).toFixed(1) + ' KB';
    }

    function run() {
        if (!inputEl || !outputEl) return;
        var input = inputEl.value;
        if (!input) { outputEl.value = ''; if (statsEl) statsEl.textContent = ''; return; }
        var result = minifyHTML(input);
        outputEl.value = result;
        if (statsEl) {
            var orig = new Blob([input]).size;
            var minified = new Blob([result]).size;
            var saved = orig - minified;
            var pct = orig > 0 ? Math.round(saved / orig * 100) : 0;
            statsEl.textContent = 'Original: ' + formatSize(orig) + ' | Minified: ' + formatSize(minified) + ' | Saved: ' + formatSize(saved) + ' (' + pct + '%)';
        }
    }

    if (runBtn) runBtn.addEventListener('click', run);

    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            if (!outputEl || !outputEl.value) return;
            navigator.clipboard.writeText(outputEl.value).then(function() {
                var orig = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                setTimeout(function() { copyBtn.textContent = orig; }, 1500);
            });
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            inputEl.value = '';
            outputEl.value = '';
            if (statsEl) statsEl.textContent = '';
        });
    }
})();
