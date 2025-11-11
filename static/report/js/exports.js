$('#rp_exportEntries').click(function() {
var from = $('#rp_from').val();
var to = $('#rp_to').val();
var url = '/api/v1/entries.csv?count=100000';
if (from) {
url += '&find[dateString][$gte]=' + from;
}
if (to) {
url += '&find[dateString][$lte]=' + to;
}
window.open(url, '_blank');
});
$('#rp_exportTreatments').click(function() {
var from = $('#rp_from').val();
var to = $('#rp_to').val();
var url = '/api/v1/treatments.csv?count=100000';
if (from) {
url += '&find[created_at][$gte]=' + from;
}
if (to) {
url += '&find[created_at][$lte]=' + to;
}
window.open(url, '_blank');
});
