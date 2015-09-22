define(['backbone', 'views', 'collections'], function(Backbone, views, collections) {
  'use strict';

  // Router
  var ArticlesRouter = Backbone.Router.extend({
    routes: {
      'home': 'home',
      'articles': 'articles',
      'about': 'about'
    },
    home: function() {
      $('.main-content').empty();
      $('.main-content').append('<h1>Home Page</h1');
      // TODO: Add content
    },
    articles: function() {
      $('.main-content').empty();
      $('.main-content').append('<h1>Articles</h1');
      $('.main-content').append('<div class="articles"><div class="throbber-loader loader hidden"></div></div');
      $('.loader').removeClass('hidden');
      var articles = new collections.Articles();
      articles.fetch(
        {
          success: function() {
            $('.loader').addClass('hidden');
            $('.articles').html(new views.ArticleListView({ collection: articles }).render().el);
          },
          error: function() {
            console.log('Error fetching articles.');
          }
        }
      );

    },
    about: function() {
      $('.main-content').empty();
      $('.main-content').append('<h1>About Project Chronos</h1>');
      // TODO: Add content
    }
  });

  return {
    ArticlesRouter: ArticlesRouter
  }

});