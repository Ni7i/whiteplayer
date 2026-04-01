"""Search algorithm implementations."""


def binary_search(arr: list, target) -> int:
    """Search for target in sorted array. Returns index or -1."""
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1


def linear_search(arr: list, target) -> int:
    """Search for target in array. Returns index or -1."""
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1
