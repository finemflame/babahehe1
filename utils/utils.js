export default function formatDate(dateString) {
    return new Date(dateString).toLocaleString('en-EN', {day: "numeric", month:"long", year:"numeric"})
}