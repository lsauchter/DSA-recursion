function findPath(row, column, solution) {
    let maze = [
        [' ', ' ', ' '],
        [' ', '*', ' '],
        [' ', ' ', 'e']
        ];
    
    solution = solution.slice(0)

    if (column < 0 || column > (maze[0].length -1) || row < 0 || row > (maze.length - 1)) return false; //if it is outside of map
    if (maze[row][column]=== '*') return false; 

    if (maze[row][column] === 'e'){
        console.log(solution.join(''))
        return true
    }

    if(maze[row][column] === '!')
        return false;

    maze[row][column]='!'
    
    if(findpath(row+1, column, [...solution, 'D'])) 
        return true   
    if(findpath(row, column+1, [...solution, 'R'])) 
        return true    
    if(findpath(row, column-1, [...solution, 'L']))
        return true
    if(findpath(row-1, column, [...solution, 'U'])) 
        return true                    

    return false;
};

findPath(0, 0, []);