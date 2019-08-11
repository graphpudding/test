var table=document.querySelector('.js-container');
console.log(table.childNodes.length);
function addValues(){
	if(table.childNodes.length==1){
		$.getJSON('http://jsonplaceholder.typicode.com/users', function(e) {
		var i=1
		 console.log(e);
		 e.forEach( function(e){
		 	$('.js-container').append('<div class="row row-'+i+'">');
		 	$('.row-'+i).append('<div class="column check-column"><input type="checkbox" class="check"></div>');
		 	$('.row-'+i).append('<div class="column id-column">'+e.id+'</div>');
			 $('.row-'+i).append('<div class="column info-column">'+
			 	'<div class="column name-column">'+
			 	'<span class="name">'+e.name+'</span><span>'+e.username+'</span></div>'+
			 	'<div class="column email-column"><span class="email">'+e.email+'</span><span class="phone">'+e.phone+'</span></div></div></div>');
		 	i++;
		 	});
		 });
	}
};
addValues();

function clearValues(){
	$('.row').remove();
	console.log('какого то хуя сработало')
}
$('.js-clear').click(function(){
	clearValues()

	});
$('.js-push').click(function(){
	addValues()
});