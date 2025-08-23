<?php
/**
 * The front page template file
 *
 * @package OfficeSetups_Lab
 */

get_header(); ?>

<main id="main" class="site-main">
    <!-- Featured Reviews Section -->
    <section class="featured-reviews py-4">
        <div class="container">
            <div class="text-center mb-2">
                <h2 class="fade-in">Latest Reviews</h2>
                <p class="fade-in" style="color: hsl(var(--text-light)); font-size: 1.125rem;">
                    In-depth analysis of the best office equipment
                </p>
            </div>
            
            <div class="grid grid-3">
                <?php
                $featured_reviews = new WP_Query(array(
                    'post_type' => 'reviews',
                    'posts_per_page' => 6,
                    'meta_key' => '_review_rating',
                    'orderby' => 'meta_value_num',
                    'order' => 'DESC'
                ));

                if ($featured_reviews->have_posts()) :
                    while ($featured_reviews->have_posts()) : $featured_reviews->the_post();
                        $rating = get_post_meta(get_the_ID(), '_review_rating', true);
                        $price = get_post_meta(get_the_ID(), '_review_price', true);
                        $affiliate_link = get_post_meta(get_the_ID(), '_review_affiliate_link', true);
                ?>
                    <article class="card fade-in">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail mb-1">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('review-thumb', array(
                                        'style' => 'border-radius: 0.5rem; width: 100%; height: 200px; object-fit: cover;'
                                    )); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="card-content">
                            <?php if ($price) : ?>
                                <div class="product-price" style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); padding: 0.25rem 0.75rem; border-radius: 1rem; display: inline-block; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
                                    <?php echo esc_html($price); ?>
                                </div>
                            <?php endif; ?>
                            
                            <h3 class="entry-title mb-1">
                                <a href="<?php the_permalink(); ?>" style="color: hsl(var(--text-heading));">
                                    <?php the_title(); ?>
                                </a>
                            </h3>
                            
                            <?php if ($rating) : ?>
                                <div class="review-rating mb-1">
                                    <?php echo officesetups_lab_star_rating($rating); ?>
                                </div>
                            <?php endif; ?>
                            
                            <div class="entry-excerpt mb-1">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <div class="card-actions" style="display: flex; gap: 0.5rem; align-items: center;">
                                <a href="<?php the_permalink(); ?>" class="btn btn-secondary" style="flex: 1;">
                                    <i class="fas fa-book-open"></i>
                                    Read Review
                                </a>
                                
                                <?php if ($affiliate_link) : ?>
                                    <a href="<?php echo esc_url($affiliate_link); ?>" class="btn btn-primary" target="_blank" rel="nofollow" style="flex: 1;">
                                        <i class="fas fa-shopping-cart"></i>
                                        Buy Now
                                    </a>
                                <?php endif; ?>
                            </div>
                        </div>
                    </article>
                <?php
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>
            
            <div class="text-center mt-2">
                <a href="<?php echo esc_url(get_post_type_archive_link('reviews')); ?>" class="btn btn-primary">
                    <i class="fas fa-star"></i>
                    View All Reviews
                </a>
            </div>
        </div>
    </section>

    <!-- Product Categories Section -->
    <section class="product-categories py-4" style="background: var(--gradient-subtle);">
        <div class="container">
            <div class="text-center mb-2">
                <h2 class="fade-in">Shop by Category</h2>
                <p class="fade-in" style="color: hsl(var(--text-light)); font-size: 1.125rem;">
                    Find the perfect equipment for your workspace
                </p>
            </div>
            
            <div class="grid grid-4">
                <?php
                $categories = array(
                    array(
                        'name' => 'Standing Desks',
                        'description' => 'Ergonomic desks for better posture',
                        'icon' => 'fas fa-desk',
                        'count' => '24',
                        'slug' => 'desks'
                    ),
                    array(
                        'name' => 'Office Chairs',
                        'description' => 'Comfortable seating solutions',
                        'icon' => 'fas fa-chair',
                        'count' => '18',
                        'slug' => 'chairs'
                    ),
                    array(
                        'name' => 'Monitors',
                        'description' => 'High-quality displays for productivity',
                        'icon' => 'fas fa-desktop',
                        'count' => '32',
                        'slug' => 'monitors'
                    ),
                    array(
                        'name' => 'Lighting',
                        'description' => 'Perfect illumination for your workspace',
                        'icon' => 'fas fa-lightbulb',
                        'count' => '15',
                        'slug' => 'lighting'
                    ),
                    array(
                        'name' => 'Keyboards',
                        'description' => 'Mechanical and ergonomic keyboards',
                        'icon' => 'fas fa-keyboard',
                        'count' => '21',
                        'slug' => 'keyboards'
                    ),
                    array(
                        'name' => 'Accessories',
                        'description' => 'Essential workspace accessories',
                        'icon' => 'fas fa-mouse',
                        'count' => '27',
                        'slug' => 'accessories'
                    ),
                    array(
                        'name' => 'Storage',
                        'description' => 'Organize your workspace efficiently',
                        'icon' => 'fas fa-archive',
                        'count' => '12',
                        'slug' => 'storage'
                    ),
                    array(
                        'name' => 'Audio',
                        'description' => 'Speakers, headphones, and microphones',
                        'icon' => 'fas fa-headphones',
                        'count' => '19',
                        'slug' => 'audio'
                    )
                );

                foreach ($categories as $category) :
                ?>
                    <div class="category-card card fade-in" style="text-align: center; padding: 2rem 1rem;">
                        <div class="category-icon" style="font-size: 3rem; color: hsl(var(--primary)); margin-bottom: 1rem;">
                            <i class="<?php echo esc_attr($category['icon']); ?>"></i>
                        </div>
                        <h3 class="category-name mb-1"><?php echo esc_html($category['name']); ?></h3>
                        <p class="category-description" style="color: hsl(var(--text-light)); margin-bottom: 1rem;">
                            <?php echo esc_html($category['description']); ?>
                        </p>
                        <div class="category-count" style="color: hsl(var(--primary)); font-weight: 600; margin-bottom: 1rem;">
                            <?php echo esc_html($category['count']); ?> Products
                        </div>
                        <a href="<?php echo esc_url(home_url('/category/' . $category['slug'] . '/')); ?>" class="btn btn-primary">
                            <i class="fas fa-arrow-right"></i>
                            Explore
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section py-4">
        <div class="container">
            <div class="text-center mb-2">
                <h2 class="fade-in">Trusted by Thousands</h2>
                <p class="fade-in" style="color: hsl(var(--text-light)); font-size: 1.125rem; max-width: 600px; margin: 0 auto;">
                    Join our community of professionals who've transformed their workspaces
                </p>
            </div>
            
            <div class="stats-grid">
                <div class="stat-item fade-in">
                    <div class="stat-number">150+</div>
                    <div class="stat-label">Products Reviewed</div>
                    <div class="stat-description">In-depth analysis and testing</div>
                </div>
                
                <div class="stat-item fade-in">
                    <div class="stat-number">50K+</div>
                    <div class="stat-label">Happy Customers</div>
                    <div class="stat-description">Satisfied with our recommendations</div>
                </div>
                
                <div class="stat-item fade-in">
                    <div class="stat-number">25+</div>
                    <div class="stat-label">Expert Reviewers</div>
                    <div class="stat-description">Professional testing team</div>
                </div>
                
                <div class="stat-item fade-in">
                    <div class="stat-number">4.9/5</div>
                    <div class="stat-label">Average Rating</div>
                    <div class="stat-description">Based on customer feedback</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Recent Blog Posts -->
    <section class="recent-posts py-4" style="background: hsl(var(--background-alt));">
        <div class="container">
            <div class="text-center mb-2">
                <h2 class="fade-in">Latest Articles</h2>
                <p class="fade-in" style="color: hsl(var(--text-light)); font-size: 1.125rem;">
                    Tips, guides, and insights for the perfect workspace
                </p>
            </div>
            
            <div class="grid grid-3">
                <?php
                $recent_posts = new WP_Query(array(
                    'post_type' => 'post',
                    'posts_per_page' => 3,
                    'post_status' => 'publish'
                ));

                if ($recent_posts->have_posts()) :
                    while ($recent_posts->have_posts()) : $recent_posts->the_post();
                ?>
                    <article class="card fade-in">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail mb-1">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('medium', array(
                                        'style' => 'border-radius: 0.5rem; width: 100%; height: 200px; object-fit: cover;'
                                    )); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="post-meta" style="color: hsl(var(--text-light)); font-size: 0.875rem; margin-bottom: 1rem;">
                            <span><?php echo get_the_date(); ?></span>
                            <span> • </span>
                            <span><?php the_author(); ?></span>
                        </div>
                        
                        <h3 class="entry-title mb-1">
                            <a href="<?php the_permalink(); ?>" style="color: hsl(var(--text-heading));">
                                <?php the_title(); ?>
                            </a>
                        </h3>
                        
                        <div class="entry-excerpt mb-1">
                            <?php the_excerpt(); ?>
                        </div>
                        
                        <a href="<?php the_permalink(); ?>" class="btn btn-secondary">
                            <i class="fas fa-arrow-right"></i>
                            Read More
                        </a>
                    </article>
                <?php
                    endwhile;
                    wp_reset_postdata();
                else :
                ?>
                    <div class="col-span-full text-center">
                        <p>No blog posts found. <a href="<?php echo admin_url('post-new.php'); ?>">Create your first post</a> to get started!</p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="newsletter-signup py-4" style="background: var(--gradient-primary); color: hsl(var(--primary-foreground)); text-align: center;">
        <div class="container">
            <div class="fade-in" style="max-width: 600px; margin: 0 auto;">
                <h2 style="color: hsl(var(--primary-foreground)); margin-bottom: 1rem;">
                    Stay Updated
                </h2>
                <p style="font-size: 1.125rem; margin-bottom: 2rem; opacity: 0.9;">
                    Get the latest reviews, deals, and workspace tips delivered to your inbox
                </p>
                
                <form class="newsletter-form" style="display: flex; gap: 1rem; max-width: 400px; margin: 0 auto;">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                        style="flex: 1; padding: 0.75rem 1rem; border: none; border-radius: 0.5rem; font-size: 1rem;"
                    >
                    <button type="submit" class="btn" style="background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); border: none; padding: 0.75rem 1.5rem; font-weight: 600; border-radius: 0.5rem;">
                        <i class="fas fa-paper-plane"></i>
                        Subscribe
                    </button>
                </form>
                
                <p style="font-size: 0.875rem; margin-top: 1rem; opacity: 0.8;">
                    No spam, unsubscribe at any time.
                </p>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>