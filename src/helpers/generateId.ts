export default function generateId() : string {
    return String(Math.floor(Math.random() * (10000 - 1 + 1) + 1))
}