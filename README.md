# Jquery-accordion-v1.0.0
simple jquery accordion using html,bootstrap,jquery

How to install in your website:

First you have to include those files in page:

- Boostrap library.
- Jquery library.
- acc_app.js file.
- stylesheet.css
 
Html markup to include one panel:

	<!-- panel heading -->
	<div class="panel panel-primary" id="acc_container">
		<div class="panel-heading">
			<h3 class="panel-title text-center">Header</h3>
		</div>
		<!-- panel content -->
		<div class="list-group" id="acc-panels-wrapper">
 			<div class="acc-item"> 
 				<a href="#" class="list-group-item panel-trigger"><strong>Panel two</strong></a>
 				<div class="list-group-item acc-inner-content">
 					Panel two content
 				</div>
 			</div>
		</div>
	</div>
