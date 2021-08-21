# recursion_experiments
Some recursive problems from over the years as well as some of the dp solutions.

# different projects
- edit distance
  - Using Levanshtein Distance, finding the distance between two words (`cat`, `cats` is 1).
- edit distance table
  - Dynamically solving the edit distance between two words by using a table. You can find the distance by at an already saved value to dictate what value comes next versus counting backwards in recursive edit distance.
- coin game
  - A classic game where the goal is to get higher value coins than the opponent. Each person alternates turns and selects a coin off the end of the line of coins. Whoever has the most at the end wins. This recursive strategy can dictate how many coins you will have at the end of the game (if and only if the opponent is also making the best moves possible).
  - Currently only the recursive strategy.
- gcd (greatest common divisor) recursive (run `node gcd "number 1" "number 2" "options"`)
  - A program which takes to numbers and can give you the highest multiple that divides both of them using the Euclidean Algorithm.
  - If it returns `1`, that means that the two numbers have no divisors in common other than `1` (for instance `5` and `7` have a gcd of `1`)
  - Use `-d` to show every step of the algorithm.
- gcd table
  - This is a useful table since the table will show the remainders and quotients at every level other that just the final value using the Extended Euclidean Algorith.
  - Use `-t` for using and showing the table as the end result.
