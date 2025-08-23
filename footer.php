    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><?php bloginfo('name'); ?></h3>
                    <p><?php bloginfo('description'); ?></p>
                    <p>Your trusted source for office equipment reviews and workspace optimization tips.</p>
                    
                    <?php if (get_theme_mod('contact_email')) : ?>
                        <p>
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email')); ?>">
                                <?php echo esc_html(get_theme_mod('contact_email')); ?>
                            </a>
                        </p>
                    <?php endif; ?>
                </div>

                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'container'      => false,
                        'menu_class'     => 'footer-menu',
                        'fallback_cb'    => 'officesetups_lab_footer_menu_fallback',
                    ));
                    ?>
                </div>

                <div class="footer-section">
                    <h3>Categories</h3>
                    <ul class="footer-categories">
                        <li><a href="<?php echo esc_url(home_url('/category/desks/')); ?>">
                            <i class="fas fa-desk"></i> Standing Desks
                        </a></li>
                        <li><a href="<?php echo esc_url(home_url('/category/chairs/')); ?>">
                            <i class="fas fa-chair"></i> Office Chairs
                        </a></li>
                        <li><a href="<?php echo esc_url(home_url('/category/monitors/')); ?>">
                            <i class="fas fa-desktop"></i> Monitors
                        </a></li>
                        <li><a href="<?php echo esc_url(home_url('/category/lighting/')); ?>">
                            <i class="fas fa-lightbulb"></i> Lighting
                        </a></li>
                        <li><a href="<?php echo esc_url(home_url('/category/accessories/')); ?>">
                            <i class="fas fa-keyboard"></i> Accessories
                        </a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <?php if (is_active_sidebar('footer-3')) : ?>
                        <?php dynamic_sidebar('footer-3'); ?>
                    <?php else : ?>
                        <h3>Follow Us</h3>
                        <div class="social-links">
                            <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                        </div>
                        
                        <h4 style="margin-top: 2rem;">Newsletter</h4>
                        <p>Get the latest reviews and office setup tips delivered to your inbox.</p>
                        <form class="newsletter-form" style="margin-top: 1rem;">
                            <input type="email" placeholder="Your email address" required style="padding: 0.5rem; border-radius: 0.25rem; border: 1px solid hsl(var(--border)); margin-bottom: 0.5rem; width: 100%;">
                            <button type="submit" class="btn btn-primary" style="width: 100%;">
                                <i class="fas fa-paper-plane"></i> Subscribe
                            </button>
                        </form>
                    <?php endif; ?>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
                <p>
                    <small>
                        <strong>Affiliate Disclosure:</strong> We may earn a commission from qualifying purchases made through affiliate links on this site. This helps support our content creation at no extra cost to you.
                    </small>
                </p>
                <p>
                    <?php
                    printf(
                        esc_html__('Powered by %1$s | Theme by %2$s', 'officesetups-lab'),
                        '<a href="https://wordpress.org/" target="_blank" rel="noopener">WordPress</a>',
                        '<a href="#" target="_blank" rel="noopener">OfficeSetups Lab</a>'
                    );
                    ?>
                </p>
            </div>
        </div>
    </footer>
</div>

<?php wp_footer(); ?>

<script>
// Simple JavaScript for animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Fade in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('#primary-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.style.display = 'block';
        
        menuToggle.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            mobileMenu.style.display = expanded ? 'none' : 'block';
        });

        // Hide mobile menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mobileMenu.style.display = 'flex';
                menuToggle.setAttribute('aria-expanded', 'false');
            } else {
                mobileMenu.style.display = 'none';
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing! We\'ll send you the latest updates.');
                this.reset();
            }
        });
    }
});
</script>

</body>
</html>

<?php
/**
 * Footer menu fallback
 */
function officesetups_lab_footer_menu_fallback() {
    echo '<ul class="footer-menu">';
    echo '<li><a href="' . esc_url(home_url('/')) . '">Home</a></li>';
    echo '<li><a href="' . esc_url(get_post_type_archive_link('reviews')) . '">Reviews</a></li>';
    echo '<li><a href="' . esc_url(get_post_type_archive_link('products')) . '">Products</a></li>';
    echo '<li><a href="' . esc_url(home_url('/about/')) . '">About</a></li>';
    echo '<li><a href="' . esc_url(home_url('/contact/')) . '">Contact</a></li>';
    echo '<li><a href="' . esc_url(home_url('/privacy-policy/')) . '">Privacy Policy</a></li>';
    echo '<li><a href="' . esc_url(home_url('/terms-of-service/')) . '">Terms of Service</a></li>';
    echo '</ul>';
}
?>