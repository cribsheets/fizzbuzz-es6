# the fizzbuzz exercise

many interviews launch with a fizzbuzz question.
we have chosen to include it here because as a programmer,
you'll see and hear about it so often that you'll see
it in your dreams.

## the exercise

write a program that displays the numbers 0-100, with
the following modifications:

* if a number is divisible by three, write 'fizz'
* if a number is divisible by five, write 'buzz'
* if a number is divisible by both three and five, write 'fizzbuzz'

we've provided a basic framework inside which you can
write the meat of the solution; all you have to do is
finish the exercise.

## in javascript

this exercise is simple enough that a single script file should
do.

You can write the solution in the javascript file then run it with `node fizzbuzz.js`; otherwise, if you don't have Node installed, you can use the included `runner.html` to run it by copying, pasting, and pressing 'run'.

### cloning this repo

if you have `git` installed (and you should), you can clone
this repo with:

`git clone git@github.com:cribsheets/fizzbuzz-es6`

a new directory called `fizzbuzz-es6/` will appear in your
current directory.

## running the solution

you can execute the program using `node` or using runner.html as described above:

`node fizzbuzz.js`

if you've completed the exercise, you should see a list
of numbers, with 3, 6, 9, 12, etc. replaced by the word 'fizz',
5, 10, 20, etc. replaced by 'buzz', and 0, 15, 30, 45, etc.
replaced by fizzbuzz. congrats! you're ready for your first
interview question.

## a basic solution

you can view a very basic solution to this problem in the
`solutions` branch, as `fizzbuzz-simple.js`. it is by no means
intended to be the optimal or most clever solution, but it
satisfies the rules of the exercise.

there are other solutions in this branch, which approach
the problem using different tools. each one has a place
in your tool belt, though the `fizzbuzz-simple.js` is the
most straightforward.

to see the solutions branch:

`git checkout solutions`

to return to the master branch:

`git checkout master`

(or just look it up on GitHub.)

## can you do better?

if you have a particularly clever solution, let us know!
we'll add it to the 'clever solutions' section.
