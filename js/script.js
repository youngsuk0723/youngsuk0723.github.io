// Initialize app functionality
function initializeApp() {
    // Tab switching functionality
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });

    // Publication category filtering
    document.querySelectorAll('.pub-filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            document.querySelectorAll('.pub-filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter publications
            document.querySelectorAll('.pub-item').forEach(item => {
                if (filter === 'all') {
                    item.style.display = '';
                } else {
                    // Check if the publication has the selected badge
                    const hasBadge = item.querySelector(`.badge-${filter}`);
                    item.style.display = hasBadge ? '' : 'none';
                }
            });
        });
    });
}

// Handle photo loading
document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.profile-photo img');
    const placeholder = document.querySelector('.profile-photo .placeholder');

    if (img && placeholder) {
        img.onerror = function() {
            this.style.display = 'none';
            placeholder.style.display = 'flex';
        };

        img.onload = function() {
            this.style.display = 'block';
            placeholder.style.display = 'none';
        };

        // Trigger load check
        if (img.complete) {
            if (img.naturalHeight === 0) {
                img.onerror();
            } else {
                img.onload();
            }
        }
    }
});
