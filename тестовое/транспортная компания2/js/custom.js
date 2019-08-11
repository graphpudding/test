function addValues(){
	$.getJSON('http://jsonplaceholder.typicode.com/users', function(e) {
	var i=1
	 console.log(e);
	 e.forEach( function(e){
	 	$('.js-container').append('<div class="row row-'+i+'">');
	 	$('.row-'+i).append('<div class="column id-column">'+e.id+'</div>');
	 	$('.row-'+i).append('<div class="column name-column">'+e.name+'</div>');
	 	$('.row-'+i).append('<div class="column username-column">'+e.username+'</div>');
	 	$('.row-'+i).append('<div class="column email-column">'+e.email+'</div>');
	 	$('.row-'+i).append('<div class="column address-column address-column-'+i+'">');
		 	$('.address-column-'+i).append('<div><strong>Город:</strong> '+e.address.city+'</div>');
		 	$('.address-column-'+i).append('<div><strong>Индекс:</strong> '+e.address.zipcode+'</div>');
		 	$('.address-column-'+i).append('<div><strong>Улица:</strong> '+e.address.street+'</div>');
		 	$('.address-column-'+i).append('<div><strong>Дом/строение:</strong> '+e.address.suite+'</div>');
		 	$('.address-column-'+i).append('<div><strong>Координаты:</strong> '+e.address.geo.lat+e.address.geo.lng+'</div>');
	 	$('.row-'+i).append('</div>');
	 	$('.js-container').append('</div>');
	 	$('.row-'+i).append('<div class="column phone-column">'+e.phone+'</div>');
	 	$('.row-'+i).append('<div class="column website-column">'+e.website+'</div>');
	 	$('.row-'+i).append('<div class="column company-column company-column-'+i+'">');
	 		$('.company-column-'+i).append('<div><strong>Название:</strong> '+e.company.name+'</div>');
	 		$('.company-column-'+i).append('<div><strong>catchPhrase:</strong> '+e.company.catchPhrase+'</div>');
	 		$('.company-column-'+i).append('<div><strong>bs:</strong> '+e.company.bs+'</div>');
	 	$('.row-'+i).append('</div>');
	 	i++;
	 	});
	 });
};
