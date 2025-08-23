<?php
/**
 * The main template file for OfficeSetups Lab theme
 *
 * @package OfficeSetups_Lab
 */

get_header(); ?>

<main id="main" class="site-main">
    <?php if (have_posts()) : ?>
        <div class="container py-4">
            <div class="grid grid-2">
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('card fade-in'); ?>>
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail mb-2">
                                <?php the_post_thumbnail('large', array('style' => 'border-radius: 0.5rem; width: 100%; height: 200px; object-fit: cover;')); ?>
                            </div>
                        <?php endif; ?>
                        
                        <header class="entry-header">
                            <h2 class="entry-title">
                                <a href="<?php the_permalink(); ?>" rel="bookmark">
                                    <?php the_title(); ?>
                                </a>
                            </h2>
                            
                            <div class="entry-meta" style="color: hsl(var(--text-light)); font-size: 0.875rem; margin-bottom: 1rem;">
                                <span><?php echo get_the_date(); ?></span>
                                <span> • </span>
                                <span><?php the_author(); ?></span>
                                <?php if (has_category()) : ?>
                                    <span> • </span>
                                    <span><?php the_category(', '); ?></span>
                                <?php endif; ?>
                            </div>
                        </header>

                        <div class="entry-content">
                            <?php the_excerpt(); ?>
                            <a href="<?php the_permalink(); ?>" class="btn btn-primary" style="margin-top: 1rem;">
                                Read More
                            </a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>

            <div class="pagination-wrapper text-center mt-2">
                <?php
                the_posts_pagination(array(
                    'mid_size' => 2,
                    'prev_text' => '← Previous',
                    'next_text' => 'Next →',
                    'class' => 'pagination'
                ));
                ?>
            </div>
        </div>
    <?php else : ?>
        <div class="container py-4 text-center">
            <div class="card">
                <h2>Nothing Found</h2>
                <p>It seems we can't find what you're looking for. Perhaps searching can help.</p>
                <?php get_search_form(); ?>
            </div>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>