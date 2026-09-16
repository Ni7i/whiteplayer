"""String manipulation utilities."""


def reverse_string(s: str) -> str:
    """Reverse a string without using slicing."""
    chars = list(s)
    left, right = 0, len(chars) - 1
    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1
    return "".join(chars)


def is_palindrome(s: str) -> bool:
    """Check if a string is a palindrome, ignoring case and spaces."""
    cleaned = "".join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]

def caesar_cipher(text: str, shift: int) -> str:
    """Encrypt text using Caesar cipher."""
    result = []
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            shifted = (ord(char) - base + shift) % 26 + base
            result.append(chr(shifted))
        else:
            result.append(char)
    return "".join(result)


def count_words(text: str) -> dict[str, int]:
    """Count word frequency in text."""
    words = text.lower().split()
    freq = {}
    for word in words:
        cleaned = "".join(c for c in word if c.isalnum())
        if cleaned:
            freq[cleaned] = freq.get(cleaned, 0) + 1
    return freq
