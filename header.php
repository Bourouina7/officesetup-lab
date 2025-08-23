<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="<?php echo get_bloginfo('description'); ?> - Expert office equipment reviews and workspace optimization guides.">
    <meta name="keywords" content="office setup, desk reviews, chair reviews, monitor reviews, workspace, productivity">
    <meta name="author" content="<?php echo get_bloginfo('name'); ?>">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php wp_title('|', true, 'right'); bloginfo('name'); ?>">
    <meta property="og:description" content="<?php echo get_bloginfo('description'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo home_url(); ?>">
    <meta property="og:site_name" content="<?php echo get_bloginfo('name'); ?>">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php wp_title('|', true, 'right'); bloginfo('name'); ?>">
    <meta name="twitter:description" content="<?php echo get_bloginfo('description'); ?>">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#main"><?php esc_html_e('Skip to content', 'officesetups-lab'); ?></a>

    <header id="masthead" class="site-header">
        <div class="container">
            <div class="header-content">
                <div class="site-branding">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <h1 class="site-logo">
                            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                                <?php bloginfo('name'); ?>
                            </a>
                        </h1>
                    <?php endif; ?>
                </div>

                <nav id="site-navigation" class="main-nav" role="navigation" aria-label="<?php esc_attr_e('Primary Menu', 'officesetups-lab'); ?>">
                    <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" style="display: none;">
                        <span class="screen-reader-text"><?php esc_html_e('Menu', 'officesetups-lab'); ?></span>
                        <i class="fas fa-bars"></i>
                    </button>
                    
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'primary-menu',
                        'container'      => false,
                        'fallback_cb'    => 'officesetups_lab_default_menu',
                    ));
                    ?>
                </nav>
            </div>
        </div>
    </header>

    <?php
    // Display hero section only on front page
    if (is_front_page() && !is_paged()) :
        $hero_title = get_theme_mod('hero_title', 'Find Your Perfect Office Setup');
        $hero_subtitle = get_theme_mod('hero_subtitle', 'Expert reviews and recommendations for the modern workspace');
    ?>
        <section class="hero-section">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title fade-in"><?php echo esc_html($hero_title); ?></h1>
                    <p class="hero-subtitle fade-in"><?php echo esc_html($hero_subtitle); ?></p>
                    <div class="hero-buttons fade-in">
                        <a href="<?php echo esc_url(get_post_type_archive_link('reviews')); ?>" class="btn btn-primary">
                            <i class="fas fa-star"></i>
                            Browse Reviews
                        </a>
                        <a href="<?php echo esc_url(get_post_type_archive_link('products')); ?>" class="btn btn-secondary">
                            <i class="fas fa-shopping-cart"></i>
                            Shop Products
                        </a>
                    </div>
                </div>
            </div>
        </section>
    <?php endif; ?>

<?php
/**
 * Default menu fallback
 */
function officesetups_lab_default_menu() {
    echo '<ul id="primary-menu" class="menu">';
    echo '<li><a href="' . esc_url(home_url('/')) . '" class="' . (is_front_page() ? 'current' : '') . '">Home</a></li>';
    echo '<li><a href="' . esc_url(get_post_type_archive_link('reviews')) . '" class="' . (is_post_type_archive('reviews') ? 'current' : '') . '">Reviews</a></li>';
    echo '<li><a href="' . esc_url(get_post_type_archive_link('products')) . '" class="' . (is_post_type_archive('products') ? 'current' : '') . '">Products</a></li>';
    echo '<li><a href="' . esc_url(home_url('/about/')) . '" class="' . (is_page('about') ? 'current' : '') . '">About</a></li>';
    echo '<li><a href="' . esc_url(home_url('/contact/')) . '" class="' . (is_page('contact') ? 'current' : '') . '">Contact</a></li>';
    echo '</ul>';
}
?>