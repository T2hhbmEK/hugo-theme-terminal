const codeblocks = document.querySelectorAll(".codeblock");

const copyText = "Copy", copiedText = "Copied!";

codeblocks.forEach(blk => {
    const btn = blk.querySelector('.codeblock-copy');
    const code = blk.querySelector('code[data-lang]');
    if (!code) return;
    btn.addEventListener('click', () => {
        navigator.clipboard.writeText(code.textContent)
            .then(() => {
                btn.textContent = copiedText;
                setTimeout(() => {
                    btn.textContent = copyText;
                }, 1000);
            })
            .catch(err => {
                alert(err);
                console.log('Something went wrong', err);
            });
    });
})