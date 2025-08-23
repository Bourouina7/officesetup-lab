/**
 * OfficeSetups Lab Theme JavaScript
 * Enhanced interactions and animations
 */

(function($) {
    'use strict';

    // Wait for document ready
    $(document).ready(function() {
        
        // Initialize all theme functionality
        initScrollAnimations();
        initSmoothScrolling();
        initMobileMenu();
        initSearchEnhancements();
        initFormEnhancements();
        initTooltips();
        initLazyLoading();
        initParallaxEffects();
        
    });

    /**
     * Scroll-triggered animations
     */
    function initScrollAnimations() {
        // Check if IntersectionObserver is supported
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        
                        // Add animation classes
                        element.classList.add('animate-in');
                        
                        // Special handling for counters
                        if (element.classList.contains('stat-number')) {
                            animateCounter(element);
                        }
                        
                        // Staggered animations for children
                        const children = element.querySelectorAll('.fade-in, .slide-up');
                        children.forEach((child, index) => {
                            setTimeout(() => {
                                child.classList.add('animate-in');
                            }, index * 100);
                        });
                        
                        observer.unobserve(element);
                    }
                });
            }, observerOptions);

            // Observe all animation elements
            document.querySelectorAll('.fade-in, .slide-up, .stat-number').forEach(el => {
                observer.observe(el);
            });
        }
    }

    /**
     * Animate numbers/counters
     */
    function animateCounter(element) {
        const target = parseInt(element.innerText.replace(/[^\d]/g, ''));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.innerText = element.innerText.replace(/[\d,]+/, target.toLocaleString());
                clearInterval(timer);
            } else {
                element.innerText = element.innerText.replace(/[\d,]+/, Math.floor(current).toLocaleString());
            }
        }, 16);
    }

    /**
     * Smooth scrolling for anchor links
     */
    function initSmoothScrolling() {
        $('a[href^="#"]').on('click', function(e) {
            const target = $(this.getAttribute('href'));
            if (target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 800, 'easeInOutQuart');
            }
        });
    }

    /**
     * Enhanced mobile menu
     */
    function initMobileMenu() {
        const menuToggle = $('.menu-toggle');
        const mobileMenu = $('#primary-menu');
        const body = $('body');
        
        menuToggle.on('click', function() {
            const isExpanded = $(this).attr('aria-expanded') === 'true';
            
            $(this).attr('aria-expanded', !isExpanded);
            mobileMenu.slideToggle(300);
            
            // Toggle body scroll
            if (!isExpanded) {
                body.addClass('menu-open');
            } else {
                body.removeClass('menu-open');
            }
        });

        // Close menu on window resize
        $(window).on('resize', function() {
            if ($(window).width() > 768) {
                mobileMenu.removeAttr('style');
                menuToggle.attr('aria-expanded', 'false');
                body.removeClass('menu-open');
            }
        });

        // Close menu when clicking on a link
        mobileMenu.find('a').on('click', function() {
            if ($(window).width() <= 768) {
                mobileMenu.slideUp(300);
                menuToggle.attr('aria-expanded', 'false');
                body.removeClass('menu-open');
            }
        });
    }

    /**
     * Search enhancements
     */
    function initSearchEnhancements() {
        const searchForms = $('.search-form');
        
        searchForms.each(function() {
            const form = $(this);
            const input = form.find('input[type="search"]');
            
            // Add search suggestions (placeholder for future enhancement)
            input.on('focus', function() {
                $(this).closest('.search-form').addClass('focused');
            });
            
            input.on('blur', function() {
                setTimeout(() => {
                    $(this).closest('.search-form').removeClass('focused');
                }, 200);
            });
        });
    }

    /**
     * Form enhancements
     */
    function initFormEnhancements() {
        // Newsletter forms
        $('.newsletter-form').on('submit', function(e) {
            e.preventDefault();
            
            const form = $(this);
            const email = form.find('input[type="email"]').val();
            const button = form.find('button[type="submit"]');
            const originalText = button.html();
            
            if (email && isValidEmail(email)) {
                // Show loading state
                button.html('<i class="fas fa-spinner fa-spin"></i> Subscribing...');
                button.prop('disabled', true);
                
                // Simulate API call
                setTimeout(() => {
                    button.html('<i class="fas fa-check"></i> Subscribed!');
                    form.find('input[type="email"]').val('');
                    
                    // Show success message
                    showNotification('Thank you for subscribing!', 'success');
                    
                    // Reset button after delay
                    setTimeout(() => {
                        button.html(originalText);
                        button.prop('disabled', false);
                    }, 2000);
                }, 1000);
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });

        // Contact forms
        $('.contact-form').on('submit', function(e) {
            e.preventDefault();
            
            const form = $(this);
            const button = form.find('button[type="submit"]');
            const originalText = button.html();
            
            // Basic validation
            let isValid = true;
            form.find('input[required], textarea[required]').each(function() {
                if (!$(this).val().trim()) {
                    isValid = false;
                    $(this).addClass('error');
                } else {
                    $(this).removeClass('error');
                }
            });
            
            if (isValid) {
                button.html('<i class="fas fa-spinner fa-spin"></i> Sending...');
                button.prop('disabled', true);
                
                // Simulate sending
                setTimeout(() => {
                    button.html('<i class="fas fa-check"></i> Sent!');
                    showNotification('Message sent successfully!', 'success');
                    form[0].reset();
                    
                    setTimeout(() => {
                        button.html(originalText);
                        button.prop('disabled', false);
                    }, 2000);
                }, 1500);
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    }

    /**
     * Initialize tooltips
     */
    function initTooltips() {
        $('[data-tooltip]').each(function() {
            $(this).on('mouseenter', function() {
                const tooltip = $('<div class="tooltip">' + $(this).data('tooltip') + '</div>');
                $('body').append(tooltip);
                
                const offset = $(this).offset();
                tooltip.css({
                    top: offset.top - tooltip.outerHeight() - 10,
                    left: offset.left + ($(this).outerWidth() / 2) - (tooltip.outerWidth() / 2)
                });
                
                tooltip.fadeIn(200);
            });
            
            $(this).on('mouseleave', function() {
                $('.tooltip').fadeOut(200, function() {
                    $(this).remove();
                });
            });
        });
    }

    /**
     * Lazy loading for images
     */
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    /**
     * Parallax effects
     */
    function initParallaxEffects() {
        const parallaxElements = $('.parallax');
        
        if (parallaxElements.length > 0) {
            $(window).on('scroll', throttle(function() {
                const scrollTop = $(window).scrollTop();
                
                parallaxElements.each(function() {
                    const element = $(this);
                    const speed = element.data('speed') || 0.5;
                    const yPos = -(scrollTop * speed);
                    element.css('transform', 'translateY(' + yPos + 'px)');
                });
            }, 16));
        }
    }

    /**
     * Utility functions
     */
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showNotification(message, type = 'info') {
        const notification = $(`
            <div class="notification notification-${type}">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close"><i class="fas fa-times"></i></button>
            </div>
        `);
        
        $('body').append(notification);
        
        notification.fadeIn(300);
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            notification.fadeOut(300, function() {
                $(this).remove();
            });
        }, 5000);
        
        // Manual close
        notification.find('.notification-close').on('click', function() {
            notification.fadeOut(300, function() {
                $(this).remove();
            });
        });
    }

    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Page-specific functionality
    if ($('.single-review').length) {
        initReviewPageFeatures();
    }

    if ($('.archive-reviews').length) {
        initReviewArchiveFeatures();
    }

    /**
     * Review page specific features
     */
    function initReviewPageFeatures() {
        // Affiliate link tracking
        $('a[rel="nofollow"]').on('click', function() {
            const link = $(this).attr('href');
            // Track affiliate clicks (placeholder)
            console.log('Affiliate link clicked:', link);
        });

        // Reading progress indicator
        if ($('.entry-content').length) {
            const progressBar = $('<div class="reading-progress"><div class="progress-fill"></div></div>');
            $('body').append(progressBar);

            $(window).on('scroll', function() {
                const scrollTop = $(window).scrollTop();
                const docHeight = $(document).height();
                const winHeight = $(window).height();
                const scrollPercent = scrollTop / (docHeight - winHeight);
                const scrollPercentRounded = Math.round(scrollPercent * 100);
                
                progressBar.find('.progress-fill').css('width', scrollPercentRounded + '%');
            });
        }
    }

    /**
     * Review archive specific features
     */
    function initReviewArchiveFeatures() {
        // Filter functionality
        $('#rating-filter, #category-filter, #sort-reviews').on('change', function() {
            // Show loading state
            $('.reviews-grid').addClass('loading');
            
            // Simulate filtering (in real implementation, use AJAX)
            setTimeout(() => {
                $('.reviews-grid').removeClass('loading');
                // Re-trigger animations for filtered results
                initScrollAnimations();
            }, 500);
        });
    }

})(jQuery);

// CSS for enhanced features (injected dynamically)
const enhancedStyles = `
<style>
.animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.menu-open {
    overflow: hidden;
}

.search-form.focused {
    transform: scale(1.02);
    box-shadow: var(--shadow-card-hover);
}

.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: var(--shadow-card-hover);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    z-index: 9999;
    min-width: 300px;
    border-left: 4px solid;
}

.notification-success {
    border-left-color: #22c55e;
    color: #16a34a;
}

.notification-error {
    border-left-color: #ef4444;
    color: #dc2626;
}

.notification-info {
    border-left-color: #3b82f6;
    color: #2563eb;
}

.notification-close {
    background: none;
    border: none;
    margin-left: auto;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.2s;
}

.notification-close:hover {
    opacity: 1;
}

.tooltip {
    position: absolute;
    background: #333;
    color: white;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    z-index: 9999;
    white-space: nowrap;
}

.tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #333;
}

.lazy {
    opacity: 0;
    transition: opacity 0.3s;
}

.loading {
    opacity: 0.5;
    pointer-events: none;
}

.reading-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(0, 0, 0, 0.1);
    z-index: 9999;
}

.progress-fill {
    height: 100%;
    background: hsl(var(--primary));
    transition: width 0.3s ease;
}

.error {
    border-color: #ef4444 !important;
    box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2) !important;
}

@media (max-width: 768px) {
    .notification {
        right: 10px;
        left: 10px;
        min-width: auto;
    }
}
</style>
`;

// Inject enhanced styles
document.head.insertAdjacentHTML('beforeend', enhancedStyles);