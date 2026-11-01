"""Tests for sorting algorithms."""
import sys
import random
sys.path.insert(0, "..")

from src.algorithms.sorting import *


def test_bubble_sort():
    assert bubble_sort([]) == []
    assert bubble_sort([1]) == [1]
    assert bubble_sort([3, 1, 2]) == [1, 2, 3]
    assert bubble_sort([5, 4, 3, 2, 1]) == [1, 2, 3, 4, 5]
    print("bubble_sort: OK")


def test_merge_sort():
    assert merge_sort([]) == []
    assert merge_sort([38, 27, 43, 3, 9, 82, 10]) == [3, 9, 10, 27, 38, 43, 82]
    random_arr = [random.randint(0, 100) for _ in range(50)]
    assert merge_sort(random_arr) == sorted(random_arr)
    print("merge_sort: OK")


if __name__ == "__main__":
    test_bubble_sort()
    test_merge_sort()
    print("All sorting tests passed!")

def test_quick_sort():
    assert quick_sort([]) == []
    assert quick_sort([1]) == [1]
    assert quick_sort([10, 7, 8, 9, 1, 5]) == [1, 5, 7, 8, 9, 10]
    random_arr = [random.randint(-50, 50) for _ in range(100)]
    assert quick_sort(random_arr) == sorted(random_arr)
    print("quick_sort: OK")


def test_insertion_sort():
    assert insertion_sort([12, 11, 13, 5, 6]) == [5, 6, 11, 12, 13]
    assert insertion_sort([1, 2, 3]) == [1, 2, 3]
    print("insertion_sort: OK")
