
angular.module('mean.frontEnd').controller('FrontEndController', ['$scope', 'Global', FrontEndController]);

function FrontEndController($scope, Global) {
	console.log('FrontEndController');
	
    $scope.global = Global;
    $scope.articles = [{
    	'title': 'My First Article',
    	'likes': 47,
    	'dislikes': 33,
    	'description': 'article summary',
    	'content': 'article content'
    },
    {
    	'title': 'My Second Article',
    	'likes': 22,
    	'dislikes': 37,
    	'description': 'article summary',
    	'content': 'article content'
    }];
}
