# recursion_experiments
Some recursive problems from over the years as well as some of the dp solutions.

# different projects
- edit distance
  - Using Levanshtein Distance, finding the distance between two words (`cat`, `cats` is 1)
- edit distance table
  - Dynamically solving the edit distance between two words by using a table. You can find the distance by at an already saved value to dictate what value comes next versus counting backwards in recursive edit distance.
- coin game
  - A classic game where the goal is to get higher value coins than the opponent. Each person alternates turns and selects a coin off the end of the line of coins. Whoever has the most at the end wins. This recursive strategy can dictate how many coins you will have at the end of the game (if and only if the opponent is also making the best moves possible).
  - Currently only the recursive strategy.
- gcd (greatest common divisor) recursive (run `node gcd.js "number 1" "number 2" "options"`)
  - A program which takes to numbers and can give you the highest multiple that divides both of them using the Euclidean Algorithm.
  - If it returns `1`, that means that the two numbers have no divisors in common other than `1` (for instance `5` and `7` have a gcd of `1`)
  - Use `-d` to show every step of the algorithm.
- gcd table
  - This is a useful table since the table will show the remainders and quotients at every level other that just the final value using the Extended Euclidean Algorithm.
  - Use `-t` for using and showing the table as the end result.
- lcs (longest common subsequence) recursive (run `node lcs.js "word 1" "word 2"`)
  - Takes two words and gives the longest common subsequence (`world`, `word` is `wor`)
- fibonacci recursive (run `node fibonacci.js "number 1"`, the number references how many numbers you want of fibonacci (.ie `0 1 1 2 3` for number `5`))
  - Takes in a number and gives you two different values back:
    - The sum of the two numbers in the fibonacci sequence before the number you inputted
    - The full array of the numbers
  - **Time complexity**:
    - As presumed, the recursive functions are rather slow
    - Until around `12`, the array recursion strategy is actually much faster and can sumwhat keep up with the dp solution with array recursion at `0.489ms` and dp solution at `0.197ms`
      - At this point, the basic recursive fibonacci sequence is actually deadly slow in comparison (`8.545ms`), which seems somewhat strange considering the space complexity of each strategy
    - Around `25`, the array recursion strategy dramatically starts falling behind with a time of `24.425ms` versus the dp solution's `0.249ms` - The basic recursive strategy has a time of `10.938ms`, which is only a slight increase from `12`
  - For fun: running `node fibonacci.js 50`:
    - I didn't have the patience for the array recursion strategy, but for basic recursion there was a time of `163738.488ms`, and for dp strategy a time of `0.626ms`
- fibonacci dp table
  - As seen by the numbers above, dynamic programming does indeed work
