<?php
/**
 * The template for displaying reviews archive
 *
 * @package OfficeSetups_Lab
 */

get_header(); ?>

<main id="main" class="site-main">
    <div class="container py-4">
        <header class="page-header text-center mb-2">
            <h1 class="page-title fade-in">
                <i class="fas fa-star" style="color: hsl(var(--primary));"></i>
                Product Reviews
            </h1>
            <p class="page-description fade-in" style="color: hsl(var(--text-light)); font-size: 1.125rem; max-width: 600px; margin: 0 auto;">
                In-depth reviews and analysis of the best office equipment and workspace solutions
            </p>
        </header>

        <?php if (have_posts()) : ?>
            <!-- Filter Options -->
            <div class="reviews-filters card mb-2 fade-in">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <div class="filter-group">
                        <label for="rating-filter" style="margin-right: 0.5rem; font-weight: 600;">Filter by Rating:</label>
                        <select id="rating-filter" style="padding: 0.5rem; border-radius: 0.25rem; border: 1px solid hsl(var(--border));">
                            <option value="">All Ratings</option>
                            <option value="5">5 Stars</option>
                            <option value="4">4+ Stars</option>
                            <option value="3">3+ Stars</option>
                        </select>
                    </div>
                    
                    <div class="filter-group">
                        <label for="category-filter" style="margin-right: 0.5rem; font-weight: 600;">Category:</label>
                        <select id="category-filter" style="padding: 0.5rem; border-radius: 0.25rem; border: 1px solid hsl(var(--border));">
                            <option value="">All Categories</option>
                            <option value="desks">Desks</option>
                            <option value="chairs">Chairs</option>
                            <option value="monitors">Monitors</option>
                            <option value="lighting">Lighting</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </div>
                    
                    <div class="sort-group">
                        <label for="sort-reviews" style="margin-right: 0.5rem; font-weight: 600;">Sort by:</label>
                        <select id="sort-reviews" style="padding: 0.5rem; border-radius: 0.25rem; border: 1px solid hsl(var(--border));">
                            <option value="date">Newest First</option>
                            <option value="rating">Highest Rated</option>
                            <option value="title">Alphabetical</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="reviews-grid grid grid-2">
                <?php while (have_posts()) : the_post();
                    $rating = get_post_meta(get_the_ID(), '_review_rating', true);
                    $price = get_post_meta(get_the_ID(), '_review_price', true);
                    $affiliate_link = get_post_meta(get_the_ID(), '_review_affiliate_link', true);
                ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('review-card card fade-in'); ?>>
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail mb-1">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('review-thumb', array(
                                        'style' => 'border-radius: 0.5rem; width: 100%; height: 250px; object-fit: cover;'
                                    )); ?>
                                </a>
                                
                                <?php if ($rating) : ?>
                                    <div class="rating-overlay" style="position: absolute; top: 1rem; right: 1rem; background: hsl(var(--background) / 0.9); backdrop-filter: blur(10px); padding: 0.5rem; border-radius: 0.5rem;">
                                        <?php echo officesetups_lab_star_rating($rating, 5, false); ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                        
                        <div class="card-content">
                            <div class="review-meta" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                                <?php if ($price) : ?>
                                    <div class="product-price" style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; font-weight: 600;">
                                        <?php echo esc_html($price); ?>
                                    </div>
                                <?php endif; ?>
                                
                                <div class="review-date" style="color: hsl(var(--text-light)); font-size: 0.875rem;">
                                    <?php echo get_the_date(); ?>
                                </div>
                            </div>
                            
                            <h2 class="entry-title mb-1">
                                <a href="<?php the_permalink(); ?>" rel="bookmark" style="color: hsl(var(--text-heading));">
                                    <?php the_title(); ?>
                                </a>
                            </h2>
                            
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
                <?php endwhile; ?>
            </div>

            <div class="pagination-wrapper text-center mt-2">
                <?php
                the_posts_pagination(array(
                    'mid_size' => 2,
                    'prev_text' => '<i class="fas fa-chevron-left"></i> Previous',
                    'next_text' => 'Next <i class="fas fa-chevron-right"></i>',
                ));
                ?>
            </div>

        <?php else : ?>
            <div class="no-reviews text-center card">
                <h2>No Reviews Found</h2>
                <p>We haven't published any reviews yet, but we're working on it!</p>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">
                    <i class="fas fa-home"></i>
                    Back to Home
                </a>
            </div>
        <?php endif; ?>
    </div>

    <!-- Newsletter Signup -->
    <section class="newsletter-signup py-4" style="background: var(--gradient-primary); color: hsl(var(--primary-foreground)); text-align: center; margin-top: 2rem;">
        <div class="container">
            <div class="fade-in" style="max-width: 600px; margin: 0 auto;">
                <h2 style="color: hsl(var(--primary-foreground)); margin-bottom: 1rem;">
                    Never Miss a Review
                </h2>
                <p style="font-size: 1.125rem; margin-bottom: 2rem; opacity: 0.9;">
                    Get notified when we publish new reviews and buying guides
                </p>
                
                <form class="newsletter-form" style="display: flex; gap: 1rem; max-width: 400px; margin: 0 auto;">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                        style="flex: 1; padding: 0.75rem 1rem; border: none; border-radius: 0.5rem; font-size: 1rem;"
                    >
                    <button type="submit" class="btn" style="background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); border: none; padding: 0.75rem 1.5rem; font-weight: 600; border-radius: 0.5rem;">
                        <i class="fas fa-bell"></i>
                        Notify Me
                    </button>
                </form>
            </div>
        </div>
    </section>
</main>

<style>
.review-card {
    position: relative;
    transition: var(--transition-smooth);
}

.review-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-elegant);
}

.post-thumbnail {
    position: relative;
    overflow: hidden;
}

.rating-overlay {
    transition: var(--transition-smooth);
}

.review-card:hover .rating-overlay {
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .reviews-filters > div {
        flex-direction: column;
        align-items: stretch;
    }
    
    .filter-group,
    .sort-group {
        margin-bottom: 1rem;
    }
    
    .reviews-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Filter and sort functionality
    const ratingFilter = document.getElementById('rating-filter');
    const categoryFilter = document.getElementById('category-filter');
    const sortSelect = document.getElementById('sort-reviews');
    
    if (ratingFilter && categoryFilter && sortSelect) {
        [ratingFilter, categoryFilter, sortSelect].forEach(element => {
            element.addEventListener('change', function() {
                // In a real implementation, this would trigger AJAX filtering
                console.log('Filter changed:', this.id, this.value);
            });
        });
    }
});
</script>

<?php get_footer(); ?>