<?php
/**
 * The template for displaying all single posts
 *
 * @package OfficeSetups_Lab
 */

get_header(); ?>

<main id="main" class="site-main">
    <div class="container py-4">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('single-post'); ?>>
                <header class="entry-header text-center mb-2">
                    <h1 class="entry-title fade-in"><?php the_title(); ?></h1>
                    
                    <div class="entry-meta fade-in" style="color: hsl(var(--text-light)); margin-bottom: 2rem;">
                        <span><i class="fas fa-calendar"></i> <?php echo get_the_date(); ?></span>
                        <span style="margin: 0 1rem;">•</span>
                        <span><i class="fas fa-user"></i> <?php the_author(); ?></span>
                        <?php if (has_category()) : ?>
                            <span style="margin: 0 1rem;">•</span>
                            <span><i class="fas fa-folder"></i> <?php the_category(', '); ?></span>
                        <?php endif; ?>
                        <?php if (get_comments_number()) : ?>
                            <span style="margin: 0 1rem;">•</span>
                            <span><i class="fas fa-comments"></i> <?php echo get_comments_number(); ?> Comments</span>
                        <?php endif; ?>
                    </div>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-thumbnail text-center mb-2 fade-in">
                        <?php the_post_thumbnail('large', array(
                            'style' => 'border-radius: 1rem; max-width: 100%; height: auto; box-shadow: var(--shadow-card);'
                        )); ?>
                    </div>
                <?php endif; ?>

                <div class="entry-content fade-in" style="max-width: 800px; margin: 0 auto; line-height: 1.8; font-size: 1.125rem;">
                    <?php
                    the_content();

                    wp_link_pages(array(
                        'before' => '<div class="page-links text-center mt-2"><span class="page-links-title">Pages:</span>',
                        'after'  => '</div>',
                    ));
                    ?>
                </div>

                <footer class="entry-footer mt-2 py-2" style="border-top: 1px solid hsl(var(--border)); text-align: center;">
                    <?php
                    $tags_list = get_the_tag_list('', ', ');
                    if ($tags_list) :
                    ?>
                        <div class="tags-links mb-1">
                            <strong><i class="fas fa-tags"></i> Tags:</strong>
                            <?php echo $tags_list; ?>
                        </div>
                    <?php endif; ?>
                    
                    <div class="share-buttons">
                        <strong>Share this post:</strong>
                        <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode(get_permalink()); ?>&text=<?php echo urlencode(get_the_title()); ?>" target="_blank" class="btn btn-secondary" style="margin: 0 0.25rem;">
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
            // Author bio
            if (get_the_author_meta('description')) :
            ?>
                <div class="author-bio card mt-2 fade-in">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div class="author-avatar">
                            <?php echo get_avatar(get_the_author_meta('ID'), 80, '', '', array('style' => 'border-radius: 50%;')); ?>
                        </div>
                        <div class="author-info">
                            <h3 style="margin-bottom: 0.5rem;">About <?php the_author(); ?></h3>
                            <p style="margin-bottom: 0; color: hsl(var(--text-light));">
                                <?php the_author_meta('description'); ?>
                            </p>
                        </div>
                    </div>
                </div>
            <?php endif; ?>

            <?php
            // Navigation between posts
            $prev_post = get_previous_post();
            $next_post = get_next_post();
            
            if ($prev_post || $next_post) :
            ?>
                <nav class="post-navigation mt-2 fade-in">
                    <div class="grid grid-2">
                        <?php if ($prev_post) : ?>
                            <div class="nav-previous card">
                                <h4><i class="fas fa-arrow-left"></i> Previous Post</h4>
                                <a href="<?php echo get_permalink($prev_post->ID); ?>" style="color: hsl(var(--text-heading));">
                                    <?php echo get_the_title($prev_post->ID); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <?php if ($next_post) : ?>
                            <div class="nav-next card">
                                <h4>Next Post <i class="fas fa-arrow-right"></i></h4>
                                <a href="<?php echo get_permalink($next_post->ID); ?>" style="color: hsl(var(--text-heading));">
                                    <?php echo get_the_title($next_post->ID); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                    </div>
                </nav>
            <?php endif; ?>

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