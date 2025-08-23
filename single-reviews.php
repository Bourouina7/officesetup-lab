<?php
/**
 * The template for displaying single reviews
 *
 * @package OfficeSetups_Lab
 */

get_header(); ?>

<main id="main" class="site-main">
    <div class="container py-4">
        <?php while (have_posts()) : the_post();
            $rating = get_post_meta(get_the_ID(), '_review_rating', true);
            $price = get_post_meta(get_the_ID(), '_review_price', true);
            $affiliate_link = get_post_meta(get_the_ID(), '_review_affiliate_link', true);
            $pros = get_post_meta(get_the_ID(), '_review_pros', true);
            $cons = get_post_meta(get_the_ID(), '_review_cons', true);
        ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('single-review'); ?>>
                <header class="entry-header text-center mb-2">
                    <h1 class="entry-title fade-in"><?php the_title(); ?></h1>
                    
                    <div class="review-meta fade-in" style="display: flex; justify-content: center; align-items: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;">
                        <?php if ($rating) : ?>
                            <div class="review-rating">
                                <?php echo officesetups_lab_star_rating($rating); ?>
                            </div>
                        <?php endif; ?>
                        
                        <?php if ($price) : ?>
                            <div class="review-price" style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 600; font-size: 1.125rem;">
                                <?php echo esc_html($price); ?>
                            </div>
                        <?php endif; ?>
                        
                        <div class="review-date" style="color: hsl(var(--text-light));">
                            <i class="fas fa-calendar"></i>
                            <?php echo get_the_date(); ?>
                        </div>
                    </div>
                    
                    <?php if ($affiliate_link) : ?>
                        <div class="review-cta fade-in">
                            <a href="<?php echo esc_url($affiliate_link); ?>" class="btn btn-primary" target="_blank" rel="nofollow" style="font-size: 1.125rem; padding: 1rem 2rem;">
                                <i class="fas fa-shopping-cart"></i>
                                Buy Now - Best Price
                            </a>
                        </div>
                    <?php endif; ?>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-thumbnail text-center mb-2 fade-in">
                        <?php the_post_thumbnail('large', array(
                            'style' => 'border-radius: 1rem; max-width: 100%; height: auto; box-shadow: var(--shadow-card);'
                        )); ?>
                    </div>
                <?php endif; ?>

                <div class="review-summary card mb-2 fade-in" style="background: var(--gradient-subtle); text-align: center;">
                    <h2 style="margin-bottom: 1rem;">Review Summary</h2>
                    <div class="grid grid-2" style="max-width: 600px; margin: 0 auto;">
                        <?php if ($pros) : ?>
                            <div class="pros-section">
                                <h3 style="color: #22c55e; margin-bottom: 1rem;">
                                    <i class="fas fa-check-circle"></i> Pros
                                </h3>
                                <ul style="list-style: none; text-align: left;">
                                    <?php
                                    $pros_list = explode("\n", $pros);
                                    foreach ($pros_list as $pro) :
                                        if (trim($pro)) :
                                    ?>
                                        <li style="margin-bottom: 0.5rem;">
                                            <i class="fas fa-plus" style="color: #22c55e; margin-right: 0.5rem;"></i>
                                            <?php echo esc_html(trim($pro)); ?>
                                        </li>
                                    <?php
                                        endif;
                                    endforeach;
                                    ?>
                                </ul>
                            </div>
                        <?php endif; ?>
                        
                        <?php if ($cons) : ?>
                            <div class="cons-section">
                                <h3 style="color: #ef4444; margin-bottom: 1rem;">
                                    <i class="fas fa-times-circle"></i> Cons
                                </h3>
                                <ul style="list-style: none; text-align: left;">
                                    <?php
                                    $cons_list = explode("\n", $cons);
                                    foreach ($cons_list as $con) :
                                        if (trim($con)) :
                                    ?>
                                        <li style="margin-bottom: 0.5rem;">
                                            <i class="fas fa-minus" style="color: #ef4444; margin-right: 0.5rem;"></i>
                                            <?php echo esc_html(trim($con)); ?>
                                        </li>
                                    <?php
                                        endif;
                                    endforeach;
                                    ?>
                                </ul>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>

                <div class="entry-content fade-in" style="max-width: 800px; margin: 0 auto; line-height: 1.8; font-size: 1.125rem;">
                    <?php
                    the_content();

                    wp_link_pages(array(
                        'before' => '<div class="page-links text-center mt-2"><span class="page-links-title">Pages:</span>',
                        'after'  => '</div>',
                    ));
                    ?>
                </div>

                <?php if ($affiliate_link) : ?>
                    <div class="review-bottom-cta text-center mt-2 py-2 fade-in" style="background: hsl(var(--primary) / 0.1); border-radius: 1rem;">
                        <h3 style="margin-bottom: 1rem;">Ready to Buy?</h3>
                        <p style="margin-bottom: 1.5rem; color: hsl(var(--text-light));">
                            Get the best deal on this product through our affiliate partner
                        </p>
                        <a href="<?php echo esc_url($affiliate_link); ?>" class="btn btn-primary" target="_blank" rel="nofollow" style="font-size: 1.125rem; padding: 1rem 2rem;">
                            <i class="fas fa-external-link-alt"></i>
                            Shop Now
                        </a>
                        <p style="font-size: 0.875rem; margin-top: 1rem; color: hsl(var(--text-light));">
                            <em>We may earn a commission from qualifying purchases at no extra cost to you.</em>
                        </p>
                    </div>
                <?php endif; ?>

                <footer class="entry-footer mt-2 py-2" style="border-top: 1px solid hsl(var(--border)); text-align: center;">
                    <div class="share-buttons">
                        <strong>Share this review:</strong>
                        <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode(get_permalink()); ?>&text=<?php echo urlencode('Check out this review: ' . get_the_title()); ?>" target="_blank" class="btn btn-secondary" style="margin: 0 0.25rem;">
                            <i class="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink()); ?>" target="_blank" class="btn btn-secondary" style="margin: 0 0.25rem;">
                            <i class="fab fa-facebook"></i> Facebook
                        </a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo urlencode(get_permalink()); ?>" target="_blank" class="btn btn-secondary" style="margin: 0 0.25rem;">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                </footer>
            </article>

            <?php
            // Related reviews
            $related = new WP_Query(array(
                'post_type' => 'reviews',
                'posts_per_page' => 3,
                'post__not_in' => array(get_the_ID()),
                'orderby' => 'rand'
            ));

            if ($related->have_posts()) :
            ?>
                <section class="related-reviews mt-2 fade-in">
                    <h2 class="text-center mb-2">You Might Also Like</h2>
                    <div class="grid grid-3">
                        <?php while ($related->have_posts()) : $related->the_post();
                            $related_rating = get_post_meta(get_the_ID(), '_review_rating', true);
                            $related_price = get_post_meta(get_the_ID(), '_review_price', true);
                        ?>
                            <article class="card">
                                <?php if (has_post_thumbnail()) : ?>
                                    <div class="post-thumbnail mb-1">
                                        <a href="<?php the_permalink(); ?>">
                                            <?php the_post_thumbnail('review-thumb', array(
                                                'style' => 'border-radius: 0.5rem; width: 100%; height: 200px; object-fit: cover;'
                                            )); ?>
                                        </a>
                                    </div>
                                <?php endif; ?>
                                
                                <?php if ($related_price) : ?>
                                    <div class="product-price" style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); padding: 0.25rem 0.75rem; border-radius: 1rem; display: inline-block; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
                                        <?php echo esc_html($related_price); ?>
                                    </div>
                                <?php endif; ?>
                                
                                <h3 class="entry-title mb-1">
                                    <a href="<?php the_permalink(); ?>" style="color: hsl(var(--text-heading));">
                                        <?php the_title(); ?>
                                    </a>
                                </h3>
                                
                                <?php if ($related_rating) : ?>
                                    <div class="review-rating mb-1">
                                        <?php echo officesetups_lab_star_rating($related_rating); ?>
                                    </div>
                                <?php endif; ?>
                                
                                <a href="<?php the_permalink(); ?>" class="btn btn-primary">
                                    <i class="fas fa-book-open"></i>
                                    Read Review
                                </a>
                            </article>
                        <?php endwhile; ?>
                    </div>
                </section>
            <?php
                wp_reset_postdata();
            endif;
            ?>

            <?php
            // Comments
            if (comments_open() || get_comments_number()) :
            ?>
                <div class="comments-area mt-2 fade-in">
                    <?php comments_template(); ?>
                </div>
            <?php endif; ?>

        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>