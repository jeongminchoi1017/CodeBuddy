<script></script>
<template>
<div class="container">
  <hr>
  <p>Resources</p>
  <ul>
    <li><a href="https://github.com/twbs/bootstrap">Bootstrap</a></li>
    <li><a href="https://bootstrap-calendar.azurewebsites.net/index-bs3.html">another calendar</a></li>
    <li><a href="http://www.bootply.com/rzNQTlDlFX">another calendar</a></li>
    <li><a href="http://slipsum.com">lipsum generator</a></li>
  </ul>
</div>
<div class="container">
  <hr>
  <p>Notes</p>
  <ul>
    <li>clicking on year to open and let you jump around 5ish years, don't care for current ui...</li>
    <li>work needed on day mode (buggy, unfinished)</li>
    <li>options missing still for classes</li>
    <li>not sure about popover contents</li>
    <li>? use of success state color and info state color ?</li>
    <li><a href="http://www.reddit.com/r/css/comments/2gvw4n/i_refactored_my_less_to_follow_fats_guidelines/">can do better with css rules</a></li>
  </ul>
</div>
</template>
<style scoped>
.calendar-day {
  width: 100px;
  min-width: 100px;
  max-width: 100px;
  height: 80px;
}
.calendar-table {
  margin: 0 auto;
  width: 700px;
}
.selected {
  background-color: #eee;
}
.outside .date {
  color: #ccc;
}
.timetitle {
  white-space: nowrap;
  text-align: right;
}
.event {
  border-top: 1px solid #b2dba1;
  border-bottom: 1px solid #b2dba1;
  background-image: linear-gradient(to bottom, #dff0d8 0px, #c8e5bc 100%);
  background-repeat: repeat-x;
  color: #3c763d;
  border-width: 1px;
  font-size: .75em;
  padding: 0 .75em;
  line-height: 2em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1px;
}
.event.begin {
  border-left: 1px solid #b2dba1;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.event.end {
  border-right: 1px solid #b2dba1;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.event.all-day {
  border-top: 1px solid #9acfea;
  border-bottom: 1px solid #9acfea;
  background-image: linear-gradient(to bottom, #d9edf7 0px, #b9def0 100%);
  background-repeat: repeat-x;
  color: #31708f;
  border-width: 1px;
}
.event.all-day.begin {
  border-left: 1px solid #9acfea;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.event.all-day.end {
  border-right: 1px solid #9acfea;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.event.clear {
  background: none;
  border: 1px solid transparent;
}
.table-tight > thead > tr > th,
.table-tight > tbody > tr > th,
.table-tight > tfoot > tr > th,
.table-tight > thead > tr > td,
.table-tight > tbody > tr > td,
.table-tight > tfoot > tr > td {
  padding-left: 0;
  padding-right: 0;
}
.table-tight-vert > thead > tr > th,
.table-tight-vert > tbody > tr > th,
.table-tight-vert > tfoot > tr > th,
.table-tight-vert > thead > tr > td,
.table-tight-vert > tbody > tr > td,
.table-tight-vert > tfoot > tr > td {
  padding-top: 0;
  padding-bottom: 0;
}



</style>