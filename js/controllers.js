angular.module('app')
  .controller('MainController', MainController)

MainController.$inject = ['$http', '$location']

function MainController($http, $location) {
  const vm = this;

  vm.search = () => {
    let url = 'http://www.omdbapi.com/?s=' + vm.q;
    if (vm.type) url += '&type=' + vm.type;
    $http.get(url).then(data => {
      vm.results = data.data.Search;
      console.log(data.data.Search);
    })
  }
  vm.movie = (id, check) => {
    let url = 'http://www.omdbapi.com/?i=' + id + '&y=&plot=full&r=json';
    if (check) url += '&tomatoes=true';
    $http.get(url).then(data => {
      console.log(data);
      vm.result = data.data
      $location.path('/result');
    })

  }
}
