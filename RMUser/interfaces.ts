interface IPageControllerScope extends ng.IScope {
    todos: ITodo[];
    newTitle: string;
    filter: IFilter;
    currentFilter: IFilterItem;
    allCount: number;
    doneCount: number;
    remainingCount: number;
    editing: ITodo;

    addTodo: Function;
    changeFilter: Function;
    editTodo: Function;
}

interface ITodo {
    title: string;
    done: boolean;
}

interface IFilter {
    done: IFilterItem;
    remaining: IFilterItem;
}

interface IFilterItem {
    done: boolean;
}