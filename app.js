const btn = document.querySelector('.btn');
const nextVoteBtn = document.getElementById('next-vote-btn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');

    if (document.body.classList.contains('dark')) {
        btn.textContent = '💡';
    } else {
        btn.textContent = '🖤';
    }
});
