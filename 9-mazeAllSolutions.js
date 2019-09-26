function findAllPaths(row, column, solution, allSolutions) {
    let maze = [
        [' ', ' ', ' '],
        [' ', '*', ' '],
        [' ', ' ', 'e']
        ];
    
    solution = solution.slice(0)
    allSolutions.slice(0)

    if (column < 0 || column > (maze[0].length -1) || row < 0 || row > (maze.length - 1)) return false; 

    if (maze[row][column]=== '*') return false; 
        
        let merged = [].concat.apply([], maze);
        if (!merged.includes(' ')) {
            console.log(maze)
            console.log('end')
            console.log(allSolutions)
            return true
        }

    if (maze[row][column] === 'e'){
        solution.join('')
        console.log('solution', solution)
        console.log('all', [...allSolutions, solution.join('')])
        findAllPaths(0, 0, [], [...allSolutions, solution.join('')])
        //return true
    }

    if(maze[row][column] === '!')
    return false;


    maze[row][column] = '!';
    
    console.log(row, column)
    // if(maze[row + 1][column] === ' ' || maze[row][column + 1] === ' ' || maze[row][column - 1] === ' ' || maze[row - 1][column] === ' ') {
    // 	console.log('maze direction')
    // 	if(findAllPaths(row+1, column, [...solution, 'D'], allSolutions)) {
    // 			console.log('if D') 
    // 			return true
    // 	}  
    // 	if(findAllPaths(row, column+1, [...solution, 'R'], allSolutions)) {
    // 			console.log('if R') 
    // 			return true
    // 	}  
    // 	if(findAllPaths(row, column-1, [...solution, 'L'], allSolutions)) {
    // 			console.log('if L') 
    // 			return true
    // 	}
    // 	if(findAllPaths(row-1, column, [...solution, 'U'], allSolutions)) {
    // 			console.log('if U') 
    // 			return true
    // 	}
    // }

    if(findAllPaths(row+1, column, [...solution, 'D'], allSolutions)) {
                console.log('if D') 
                return true
        }  
        if(findAllPaths(row, column+1, [...solution, 'R'], allSolutions)) {
                console.log('if R') 
                return true
        }  
        if(findAllPaths(row, column-1, [...solution, 'L'], allSolutions)) {
                console.log('if L') 
                return true
        }
        if(findAllPaths(row-1, column, [...solution, 'U'], allSolutions)) {
                console.log('if U') 
                return true
        }

    maze[row][column] = '$'                   

    console.log('false')
    return false;
};

findAllPaths(0, 0, [], []);