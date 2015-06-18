todoModule.controller("pageController", ["$scope", "$filter", ($scope: IPageControllerScope, $filter: ng.IFilterService) => {
    var originalTitle: string = "";

    //プロパティの初期化
    $scope.todos = [];
    $scope.newTitle = "";
    $scope.filter = {
        done: { done: true },
        remaining: { done: false },
    };
    $scope.currentFilter = null;
    $scope.editing = null;

    //メソッド定義
    $scope.addTodo = () => {
        $scope.todos.push({
            title: $scope.newTitle,
            done: false,
        });
        $scope.newTitle = "";
    };

    $scope.changeFilter = (filter: IFilterItem) => {
        $scope.currentFilter = filter;
    };

    $scope.editTodo = (todo: ITodo) => {
        alert();
        originalTitle = todo.title;
        $scope.editing = todo;
    };

    //モデル
    var where = $filter("filter");
    $scope.$watch("todos", (todos: ITodo[]) => {
        var length = todos.length;
        $scope.allCount = length;
        $scope.doneCount = where(todos, $scope.filter.done).length;
        $scope.remainingCount = length - $scope.doneCount;
    }, true);
}]);