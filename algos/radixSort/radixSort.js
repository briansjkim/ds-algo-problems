/**
 * Special sorting algo that works on lists of numbers
 * Never makes comparisons between elements
 * Instead, it exploits the fact that info about the size of a number is envoded in the number of digits
 * More digits means a bigger number
 *
 *
 * first looks at the right-most digit in each number
 * then second to right-most, so on
 */