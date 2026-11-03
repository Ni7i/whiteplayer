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

def binary_search_recursive(arr: list, target, left: int = 0, right: int = None) -> int:
    """Recursive binary search implementation."""
    if right is None:
        right = len(arr) - 1
    if left > right:
        return -1
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)


def interpolation_search(arr: list, target) -> int:
    """Search using interpolation for uniformly distributed sorted arrays."""
    low, high = 0, len(arr) - 1
    while low <= high and arr[low] <= target <= arr[high]:
        if arr[high] == arr[low]:
            if arr[low] == target:
                return low
            break
        pos = low + ((target - arr[low]) * (high - low)) // (arr[high] - arr[low])
        if arr[pos] == target:
            return pos
        elif arr[pos] < target:
            low = pos + 1
        else:
            high = pos - 1
    return -1
