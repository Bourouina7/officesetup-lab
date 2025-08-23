<?php
/**
 * OfficeSetups Lab functions and definitions
 *
 * @package OfficeSetups_Lab
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme setup
 */
function officesetups_lab_setup() {
    // Add theme support for various features
    add_theme_support('automatic-feed-links');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    add_theme_support('customize-selective-refresh-widgets');
    add_theme_support('custom-logo');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'officesetups-lab'),
        'footer' => esc_html__('Footer Menu', 'officesetups-lab'),
    ));

    // Add custom image sizes
    add_image_size('hero-image', 1200, 600, true);
    add_image_size('product-thumb', 300, 300, true);
    add_image_size('review-thumb', 400, 250, true);
}
add_action('after_setup_theme', 'officesetups_lab_setup');

/**
 * Enqueue scripts and styles
 */
function officesetups_lab_scripts() {
    // Enqueue theme stylesheet
    wp_enqueue_style('officesetups-lab-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue custom JavaScript
    wp_enqueue_script('officesetups-lab-script', get_template_directory_uri() . '/js/theme.js', array('jquery'), '1.0.0', true);
    
    // Enqueue Font Awesome for icons
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css', array(), '6.0.0');
    
    // Add comment reply script on single posts
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'officesetups_lab_scripts');

/**
 * Register widget areas
 */
function officesetups_lab_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Sidebar', 'officesetups-lab'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Add widgets here.', 'officesetups-lab'),
        'before_widget' => '<section id="%1$s" class="widget card %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 1', 'officesetups-lab'),
        'id'            => 'footer-1',
        'description'   => esc_html__('Footer widget area 1', 'officesetups-lab'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 2', 'officesetups-lab'),
        'id'            => 'footer-2',
        'description'   => esc_html__('Footer widget area 2', 'officesetups-lab'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 3', 'officesetups-lab'),
        'id'            => 'footer-3',
        'description'   => esc_html__('Footer widget area 3', 'officesetups-lab'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'officesetups_lab_widgets_init');

/**
 * Custom post types
 */
function officesetups_lab_custom_post_types() {
    // Reviews post type
    register_post_type('reviews', array(
        'labels' => array(
            'name' => 'Reviews',
            'singular_name' => 'Review',
            'add_new' => 'Add New Review',
            'add_new_item' => 'Add New Review',
            'edit_item' => 'Edit Review',
            'new_item' => 'New Review',
            'view_item' => 'View Review',
            'search_items' => 'Search Reviews',
            'not_found' => 'No reviews found',
            'not_found_in_trash' => 'No reviews found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'reviews'),
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'comments'),
        'menu_icon' => 'dashicons-star-filled',
        'show_in_rest' => true
    ));

    // Products post type
    register_post_type('products', array(
        'labels' => array(
            'name' => 'Products',
            'singular_name' => 'Product',
            'add_new' => 'Add New Product',
            'add_new_item' => 'Add New Product',
            'edit_item' => 'Edit Product',
            'new_item' => 'New Product',
            'view_item' => 'View Product',
            'search_items' => 'Search Products',
            'not_found' => 'No products found',
            'not_found_in_trash' => 'No products found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'products'),
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-products',
        'show_in_rest' => true
    ));
}
add_action('init', 'officesetups_lab_custom_post_types');

/**
 * Custom meta boxes
 */
function officesetups_lab_add_meta_boxes() {
    add_meta_box(
        'review-details',
        'Review Details',
        'officesetups_lab_review_meta_box',
        'reviews',
        'normal',
        'high'
    );

    add_meta_box(
        'product-details',
        'Product Details',
        'officesetups_lab_product_meta_box',
        'products',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'officesetups_lab_add_meta_boxes');

/**
 * Review meta box callback
 */
function officesetups_lab_review_meta_box($post) {
    wp_nonce_field('officesetups_lab_review_nonce', 'officesetups_lab_review_nonce');
    
    $rating = get_post_meta($post->ID, '_review_rating', true);
    $price = get_post_meta($post->ID, '_review_price', true);
    $affiliate_link = get_post_meta($post->ID, '_review_affiliate_link', true);
    $pros = get_post_meta($post->ID, '_review_pros', true);
    $cons = get_post_meta($post->ID, '_review_cons', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="review_rating">Rating (1-5):</label></th>';
    echo '<td><input type="number" id="review_rating" name="review_rating" value="' . esc_attr($rating) . '" min="1" max="5" step="0.1" /></td></tr>';
    
    echo '<tr><th><label for="review_price">Price:</label></th>';
    echo '<td><input type="text" id="review_price" name="review_price" value="' . esc_attr($price) . '" /></td></tr>';
    
    echo '<tr><th><label for="review_affiliate_link">Affiliate Link:</label></th>';
    echo '<td><input type="url" id="review_affiliate_link" name="review_affiliate_link" value="' . esc_attr($affiliate_link) . '" /></td></tr>';
    
    echo '<tr><th><label for="review_pros">Pros (one per line):</label></th>';
    echo '<td><textarea id="review_pros" name="review_pros" rows="4" cols="50">' . esc_textarea($pros) . '</textarea></td></tr>';
    
    echo '<tr><th><label for="review_cons">Cons (one per line):</label></th>';
    echo '<td><textarea id="review_cons" name="review_cons" rows="4" cols="50">' . esc_textarea($cons) . '</textarea></td></tr>';
    echo '</table>';
}

/**
 * Product meta box callback
 */
function officesetups_lab_product_meta_box($post) {
    wp_nonce_field('officesetups_lab_product_nonce', 'officesetups_lab_product_nonce');
    
    $price = get_post_meta($post->ID, '_product_price', true);
    $affiliate_link = get_post_meta($post->ID, '_product_affiliate_link', true);
    $category = get_post_meta($post->ID, '_product_category', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="product_price">Price:</label></th>';
    echo '<td><input type="text" id="product_price" name="product_price" value="' . esc_attr($price) . '" /></td></tr>';
    
    echo '<tr><th><label for="product_affiliate_link">Affiliate Link:</label></th>';
    echo '<td><input type="url" id="product_affiliate_link" name="product_affiliate_link" value="' . esc_attr($affiliate_link) . '" /></td></tr>';
    
    echo '<tr><th><label for="product_category">Category:</label></th>';
    echo '<td><select id="product_category" name="product_category">';
    echo '<option value="">Select Category</option>';
    echo '<option value="desks"' . selected($category, 'desks', false) . '>Desks</option>';
    echo '<option value="chairs"' . selected($category, 'chairs', false) . '>Chairs</option>';
    echo '<option value="monitors"' . selected($category, 'monitors', false) . '>Monitors</option>';
    echo '<option value="lighting"' . selected($category, 'lighting', false) . '>Lighting</option>';
    echo '<option value="accessories"' . selected($category, 'accessories', false) . '>Accessories</option>';
    echo '</select></td></tr>';
    echo '</table>';
}

/**
 * Save meta box data
 */
function officesetups_lab_save_meta_boxes($post_id) {
    // Save review meta
    if (isset($_POST['officesetups_lab_review_nonce']) && wp_verify_nonce($_POST['officesetups_lab_review_nonce'], 'officesetups_lab_review_nonce')) {
        if (isset($_POST['review_rating'])) {
            update_post_meta($post_id, '_review_rating', sanitize_text_field($_POST['review_rating']));
        }
        if (isset($_POST['review_price'])) {
            update_post_meta($post_id, '_review_price', sanitize_text_field($_POST['review_price']));
        }
        if (isset($_POST['review_affiliate_link'])) {
            update_post_meta($post_id, '_review_affiliate_link', esc_url($_POST['review_affiliate_link']));
        }
        if (isset($_POST['review_pros'])) {
            update_post_meta($post_id, '_review_pros', sanitize_textarea_field($_POST['review_pros']));
        }
        if (isset($_POST['review_cons'])) {
            update_post_meta($post_id, '_review_cons', sanitize_textarea_field($_POST['review_cons']));
        }
    }

    // Save product meta
    if (isset($_POST['officesetups_lab_product_nonce']) && wp_verify_nonce($_POST['officesetups_lab_product_nonce'], 'officesetups_lab_product_nonce')) {
        if (isset($_POST['product_price'])) {
            update_post_meta($post_id, '_product_price', sanitize_text_field($_POST['product_price']));
        }
        if (isset($_POST['product_affiliate_link'])) {
            update_post_meta($post_id, '_product_affiliate_link', esc_url($_POST['product_affiliate_link']));
        }
        if (isset($_POST['product_category'])) {
            update_post_meta($post_id, '_product_category', sanitize_text_field($_POST['product_category']));
        }
    }
}
add_action('save_post', 'officesetups_lab_save_meta_boxes');

/**
 * Customizer settings
 */
function officesetups_lab_customize_register($wp_customize) {
    // Hero section
    $wp_customize->add_section('hero_section', array(
        'title' => 'Hero Section',
        'priority' => 30,
    ));

    $wp_customize->add_setting('hero_title', array(
        'default' => 'Find Your Perfect Office Setup',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_title', array(
        'label' => 'Hero Title',
        'section' => 'hero_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'Expert reviews and recommendations for the modern workspace',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('hero_subtitle', array(
        'label' => 'Hero Subtitle',
        'section' => 'hero_section',
        'type' => 'textarea',
    ));

    // Contact info
    $wp_customize->add_section('contact_info', array(
        'title' => 'Contact Information',
        'priority' => 35,
    ));

    $wp_customize->add_setting('contact_email', array(
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('contact_email', array(
        'label' => 'Contact Email',
        'section' => 'contact_info',
        'type' => 'email',
    ));
}
add_action('customize_register', 'officesetups_lab_customize_register');

/**
 * Helper function to display star rating
 */
function officesetups_lab_star_rating($rating, $max_rating = 5) {
    $output = '<div class="star-rating">';
    for ($i = 1; $i <= $max_rating; $i++) {
        $class = ($i <= $rating) ? 'star filled' : 'star';
        $output .= '<span class="' . $class . '">★</span>';
    }
    $output .= '<span class="rating-text">' . number_format($rating, 1) . '/' . $max_rating . '</span>';
    $output .= '</div>';
    return $output;
}

/**
 * Excerpt length
 */
function officesetups_lab_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'officesetups_lab_excerpt_length');

/**
 * Excerpt more
 */
function officesetups_lab_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'officesetups_lab_excerpt_more');
?>