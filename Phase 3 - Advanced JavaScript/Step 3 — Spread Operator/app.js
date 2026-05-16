// Used to copy or merge arrays/objects.

// Arrays

const nums1 = [1, 2];
const nums2 = [3, 4];

const merged = [...nums1, ...nums2];

console.log(merged);

// Objects

const user = {
    name: "Raj"
};

const updatedUser = {
    ...user,
    age: 21
};

console.log(updatedUser);