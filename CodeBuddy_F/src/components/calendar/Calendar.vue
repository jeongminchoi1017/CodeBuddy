
<script>
document.addEventListener('DOMContentLoaded', function () {
  var events = document.querySelectorAll('[data-toggle="calendar"] > .row > .calendar-day > .events > .event');

  events.forEach(function (event) {
    event.addEventListener('mouseover', function () {
      var popoverContent = getPopoverContent(event);
      showPopover(event, popoverContent);
    });

    event.addEventListener('mouseout', function () {
      hidePopover(event);
    });
  });

  function getPopoverContent(event) {
    var attending = parseInt(event.querySelector('div.progress > .progress-bar').getAttribute('aria-valuenow')),
        total = parseInt(event.querySelector('div.progress > .progress-bar').getAttribute('aria-valuemax')),
        remaining = total - attending,
        displayAttending = attending - event.querySelector('div.attending').children.length,
        html = [
          '<button type="button" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>',
          '<h4>' + event.querySelector('h4').textContent + '</h4>',
          '<div class="desc">' + event.querySelector('div.desc').innerHTML + '</div>',
          '<div class="location">' + event.querySelector('div.location').innerHTML + '</div>',
          '<div class="datetime">' + event.querySelector('div.datetime').innerHTML + '</div>',
          '<div class="space">Attending <span class="pull-right">Available spots</span></div>',
          '<div class="attending">',
          event.querySelector('div.attending').innerHTML,
          '<span class="attending-overflow">+' + displayAttending + '</span>',
          '<span class="pull-right">' + remaining + '</span>',
          '</div>',
          '<a href="#signup" class="btn btn-success" role="button">Sign up</a>'
        ].join('\n');

    return html;
  }

  function showPopover(event, content) {
    var popover = document.createElement('div');
    popover.className = 'popover calendar-event-popover';
    popover.setAttribute('role', 'tooltip');
    popover.innerHTML = '<div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content">' + content + '</div>';

    event.setAttribute('title', event.querySelector('h4').textContent);
    event.setAttribute('data-content', content);
    event.appendChild(popover);

    var closeBtn = popover.querySelector('.close');
    closeBtn.addEventListener('click', function (event) {
      hidePopover(event.target.closest('.event'));
    });
  }

  function hidePopover(event) {
    var popover = event.querySelector('.popover');
    if (popover) {
      popover.parentNode.removeChild(popover);
    }
  }
});


</script>

<template>
<h1 class="title text-center"> July 2014 </h1>
	<div class="calendar" data-toggle="calendar">
		<div class="row">
			<div class="col-xs-12 calendar-day calendar-no-current-month">
				<time datetime="2014-06-29">29</time>
			</div>
			<div class="col-xs-12 calendar-day calendar-no-current-month">
				<time datetime="2014-06-30">30</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-01">01</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-02">02</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-03">03</time>
				<div class="events">
					<div class="event">
						<h4>Mid Day Dance Break - SELF CARE</h4>
						<div class="desc">
							<p>Take a Break and enjoy Live dance and Art from Eries own local Talent</p>
							<p>Support for this program is provided in part from an Erie Arts & Culture Project Grant, made possible by community contributions to the Combined Arts & Cultural Campaign and the Erie Arts Endowment.</p>
						</div>
						<div class="location"> <span class="glyphicon glyphicon-map-marker"></span> State St and Rt 5, Erie, Pa.</div>
						<div class="datetime"> <span class="glyphicon glyphicon-time"></span> 12:00am - 1:00pm</div>
						<div class="attending">
							<img src="http://api.randomuser.me/portraits/women/54.jpg" />
							<img src="http://api.randomuser.me/portraits/men/27.jpg" />
							<img src="http://api.randomuser.me/portraits/men/61.jpg" />
						</div>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuenow="6" aria-valuemin="0" aria-valuemax="134" style="width: 4.477%;">
								<span class="sr-only">4.477% Filled</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-04">04</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-05">05</time>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-06">06</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-07">07</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-08">08</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-09">09</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-10">10</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-11">11</time>
				<div class="events">
					<div class="event">
						<h4>Local artist showing, meet and greet and feature film</h4>
						<div class="desc">
							<p>We will be showing local artists films on our new 16 foot movie screen with feature film last "Carnival Of Souls", come see the new BT, hang out and socialize while enjoying some local talent. FREE event, suggested $2 or $3 donation. Concessions, popcorn, soda etc available so come hungry!!</p>
							<p>*This event is all ages welcomed and also handicapped accessible (side entrance ramp)</p>
							<p>Featuring :</p>
							<ul>
								<li><a href="https://www.youtube.com/user/walrys11/videos">Jack Rys</a></li>
								<li><a href="http://society6.com/wombglow">Alex Wilson</a></li>
								<li><a href="http://www.erieartcompany.com/">Brad Ford</a></li>
								<li><a href="http://www.youtube.com/watch?v=dkTz0EvfEiY">Carnival of Souls</a> (Trailer)</li>
							</ul>
						</div>
						<div class="location"> <span class="glyphicon glyphicon-map-marker"></span> 145 West 11th Street, Erie, Pa.</div>
						<div class="datetime"> <span class="glyphicon glyphicon-time"></span> 7:00pm - ?</div>
						<div class="attending">
							<img src="http://api.randomuser.me/portraits/women/31.jpg" />
							<img src="http://api.randomuser.me/portraits/women/47.jpg" />
							<img src="http://api.randomuser.me/portraits/women/93.jpg" />
						</div>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="368" style="width: 11.68%;">
								<span class="sr-only">11.68% Filled</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-12">12</time>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-13">13</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-14">14</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-15">15</time>
				<div class="events">
					<div class="event">
						<h4>Erie Art Museum 91st Annual Spring Show</h4>
						<div class="desc">
							<p>This juried, regional multi-media exhibition, open to all artists living within a 250-mile radius of Erie represents all media and showcases the most current and finest artwork created in the area.</p>
						</div>
						<div class="location"> <span class="glyphicon glyphicon-map-marker"></span> Presque Isle State Park </div>
						<div class="datetime"> <span class="glyphicon glyphicon-time"></span> ALL DAY</div>
						<div class="attending">
							<img src="http://api.randomuser.me/portraits/men/10.jpg" />
							<img src="http://api.randomuser.me/portraits/men/23.jpg" />
							<img src="http://api.randomuser.me/portraits/men/66.jpg" />
						</div>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuenow="69" aria-valuemin="0" aria-valuemax="320" style="width: 21.56%;">
								<span class="sr-only">21.56% Filled</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-16">16</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-17">17</time>>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-18">18</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-19">19</time>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-20">20</time>
				<div class="events">
					<div class="event">
						<h4>Mouse0270's 24th Birthday</h4>
						<div class="desc">
							<p style="text-align:center;">Friendships are one of the few things that improve with age<br/>
							The family and friends of <br/>
							Mouse0270 <br/>
							invite you to celebrate his <br/>
							24th Birthday and a lifetime of good friendship</p>
						</div>
						<div class="location"> <span class="glyphicon glyphicon-map-marker"></span> Erie, Pa </div>
						<div class="datetime"> <span class="glyphicon glyphicon-time"></span> 10:00pm - 2:00am </div>
						<div class="attending">
							<img src="https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xfa1/t1.0-9/417157_4897339837183_626079670_n.jpg" />
						</div>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="336" style="width: 0.29%;">
								<span class="sr-only">0.29% Filled</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-21">21</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-22">22</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-23">23</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-24">24</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-25">25</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-26">26</time>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-27">27</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-28">28</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-29">29</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-30">30</time>
			</div>
			<div class="col-xs-12 calendar-day">
				<time datetime="2014-07-31">31</time>
			</div>
			<div class="col-xs-12 calendar-day calendar-no-current-month">
				<time datetime="2014-08-01">01</time>
			</div>
			<div class="col-xs-12 calendar-day calendar-no-current-month">
				<time datetime="2014-08-02">02</time>
			</div>
		</div>
	</div>
	<p class="text-center">No this is not a working calendar. It is purely for design. You are more than welcome to make it work, I sure am!</p>

</template>
<style scoped>
    body {
		padding: 20px 0px 200px;
	}
	h1.title {
		font-family: 'Roboto', sans-serif;
		font-weight: 900;
	}
	.calendar {
		margin: 0px 40px;
	}
	.popover.calendar-event-popover {
		font-family: 'Roboto', sans-serif;
		font-size: 12px;
		color: rgb(120, 120, 120);
		border-radius: 2px;
		max-width: 300px;
	}
	.popover.calendar-event-popover h4 {
		font-size: 14px;
		font-weight: 900;
	}
	.popover.calendar-event-popover .location,
	.popover.calendar-event-popover .datetime {
		font-size: 14px;
		font-weight: 700;
		margin-bottom: 5px;
	}
	.popover.calendar-event-popover .location > span,
	.popover.calendar-event-popover .datetime > span {
		margin-right: 10px;
	}
	.popover.calendar-event-popover .space,
	.popover.calendar-event-popover .attending {
		margin-top: 10px;
		padding-bottom: 5px;
		border-bottom: 1px solid rgb(160, 160, 160);
		font-weight: 700;
	}
	.popover.calendar-event-popover .space > .pull-right,
	.popover.calendar-event-popover .attending > .pull-right {
		font-weight: 400;
	}
	.popover.calendar-event-popover .attending {
		margin-top: 5px;
		font-size: 18px;
		padding: 0px 10px 5px;
	}
	.popover.calendar-event-popover .attending img {
		border-radius: 50%;
		width: 40px;
	}
	.popover.calendar-event-popover .attending span.attending-overflow {
		display: inline-block;
		width: 40px;
		background-color: rgb(200, 200, 200);
		border-radius: 50%;
		padding: 8px 0px 7px;
		text-align: center;
	}
	.popover.calendar-event-popover .attending > .pull-right {
		font-size: 28px;
	}
	.popover.calendar-event-popover a.btn {
		margin-top: 10px;
		width: 100%;
		border-radius: 3px;
	}
	[data-toggle="calendar"] > .row > .calendar-day {
		font-family: 'Roboto', sans-serif;
		width: 14.28571428571429%;
		border: 1px solid rgb(235, 235, 235);
		border-right-width: 0px;
		border-bottom-width: 0px;
		min-height: 120px;
	}
	[data-toggle="calendar"] > .row > .calendar-day.calendar-no-current-month {
		color: rgb(200, 200, 200);
	}
	[data-toggle="calendar"] > .row > .calendar-day:last-child {
		border-right-width: 1px;
	}

	[data-toggle="calendar"] > .row:last-child > .calendar-day {
		border-bottom-width: 1px;
	}

	.calendar-day > time {
		position: absolute;
		display: block;
		bottom: 0px;
		left: 0px;
		font-size: 12px;
		font-weight: 300;
		width: 100%;
		padding: 10px 10px 3px 0px;
		text-align: right;
	}
	.calendar-day > .events {
		cursor: pointer;
	}
	.calendar-day > .events > .event h4 {
		font-size: 12px;
		font-weight: 700;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-bottom: 3px;
	}
	.calendar-day > .events > .event > .desc,
	.calendar-day > .events > .event > .location,
	.calendar-day > .events > .event > .datetime,
	.calendar-day > .events > .event > .attending {
		display: none;
	}
	.calendar-day > .events > .event > .progress {
		height: 10px;
	}

</style>