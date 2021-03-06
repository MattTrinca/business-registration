---
title: Forms
layout: default
---
<div class="toc">
	<h1><span><a href="../style-guide.html"> &laquo; Style guide</a></span>
	Forms</h1>
</div>
<div class="description">
	<p>This section describes individual form elements and provides examples of form layout variations within the application.</p>
</div>
<div class="highlight">
	<p>A separate page contains examples of <a href="forms-examples.html"><strong>form layout examples</strong></a>.</p>
</div>
<h2>Field elements</h2>
<p>
	<label for="text_field">Text Field:</label><br />
	<input type="text" id="text_field" />
</p>

<p>
	<label for="text_field_disabled">Disabled Text Field:</label><br />
	<input type="text" id="text_field_disabled" disabled value="I'm disabled" />
</p>

<p>
	<label for="text_field_readonly">Readonly Text Field:</label><br />
	<input type="text" id="text_field_readonly" readonly value="I'm readonly" />
</p>

<p>
	<label for="text_area">Text Area:</label><br />
	<textarea id="text_area"></textarea>
</p>

<p>
	<label for="text_area_disabled">Disabled Text Area:</label><br />
	<textarea id="text_area_disabled" disabled>I'm disabled</textarea>
</p>

<p>
	<label for="text_area">Readonly Text Area:</label><br />
	<textarea id="text_area" readonly>I'm readonly</textarea>
</p>

<p>
	<label for="select_element">Select Element:</label><br />
	<select id="select_element">
		<optgroup label="Option Group 1">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
		</optgroup>
		<optgroup label="Option Group 2">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3" disabled>Disabled Option</option>
		</optgroup>
	</select>
</p>

<p>
	<label for="select_element_disabled">Disabled Select Element:</label><br />
	<select id="select_element_disabled" disabled>
		<option value="1">Unselectable Option</option>
		<option value="2">This option should not even be seen</option>
	</select>
</p>

<hr />

<h3 id="file-input">File input field</h3>
<div class="custom-controls">
	<p>Input [type=file] standard:</p>
	<p>
		<input type="file" id="file1" />
		<label for="file1">Choose a file&hellip;</label>
	</p>
	<p>disabled:</p>
	<p>
		<input type="file" id="file2" disabled />
		<label for="file2">Choose a file&hellip;</label>
	</p>
	<p>Compact mode is automatically switched on when there is not enough room to display the button alongside the control. Compact mode can also be set manually by adding the class "compact" to the input element.</p>
	<p>
		<input type="file" id="file3" class="compact" />
		<label for="file3">Choose a file&hellip;</label>
	</p>

	<p>compact disabled:</p>
	<p>
		<input type="file" id="file4" class="compact" disabled />
		<label for="file4">Choose a file&hellip;</label>
	</p>
</div>

<hr />
<h3>Custom radio and checkboxes</h3>
<p>A custom class enables radio buttons and checkboxes to appear larger for easier targeting in mobile devices. Styling is also consistent with SOBRS branding and should behave more consistently across browsers. To ensure radio buttons and checkboxes receive the image replacement styling, apply the <code>custom-controls</code> class to either the fieldset or any containing element (ie: a div) surrounding the form elements.</p>
<div class="custom-controls clearfix">
	<fieldset>
		<legend>Some information about you</legend>
		<p>Gender:</p>
		<p><input type="radio" value="male" id="male" name="gender" /> <label for="male">Male</label></p>
		<p><input type="radio" value="Female" id="female" name="gender" /> <label for="female">Female</label></p>
		<p>Stuff you like:</p>
		<p><input type="checkbox" value="CSS3" id="css3" /> <label for="css3">CSS3</label></p>
		<p><input type="checkbox" value="HTML5" id="html5" /> <label for="html5">HTML5</label></p>
		<p><input type="checkbox" value="JavaScript" id="javascript" /> <label for="javascript">JavaScript</label></p>
		<p><input type="checkbox" value="Other" id="other" /> <label for="other">Other</label></p>
	</fieldset>
	<fieldset>
		<legend>What happens when I specify disabled or checked attributes?</legend>
		<p>Disabling and checking radio inputs:</p>
		<p><input type="radio" value="disabled" id="disabled" name="disabled" disabled /> <label for="disabled">This is disabled</label></p>
		<p><input type="radio" value="check" id="check" name="check" checked /> <label for="check">This is checked</label></p>
		<p>Disabling and checking checkbox inputs:</p>
		<p><input type="checkbox" value="disabled" id="disabled2" disabled /> <label for="disabled2">This is disabled</label></p>
		<p><input type="checkbox" value="check" id="check2" checked /> <label for="check2">This is checked</label></p>
		<p><input type="checkbox" value="Stop" id="disablecheck" disabled checked /> <label for="disablecheck">This is checked and disabled</label></p>
		<p><input type="checkbox" value="Other" id="other2" /> <label for="other2">Other</label></p>
	</fieldset>
	<h3 id="radio-toggle">Radio toggle (class="radio-toggle")</h3>
	<fieldset>
		<legend>Question? (two options)</legend>
		<div class="radio-toggle" id="activity-statement-frequency-1">
			<label class="label-left" for="yes"><input type="radio" name="statements" id="yes" /> <span>Yes</span></label>
			<label class="label-right" for="no"><input type="radio" name="statements" id="no" /> <span>No</span></label>
		</div>
	</fieldset>
	<fieldset>
		<legend>Question? (three options)</legend>
		<div class="radio-toggle" id="activity-statement-frequency-1">
			<label class="label-left" for="male"><input type="radio" name="statements" id="male" /> <span>Male</span></label>
			<label class="label-middle" for="female"><input type="radio" name="statements" id="female" /> <span>Female</span></label>
			<label class="label-right" for="none"><input type="radio" name="statements" id="none" /> <span>Not specified</span></label>
		</div>
	</fieldset>
	<fieldset>
		<legend>Question? (multiple options class="stacked")</legend>
		<div class="radio-toggle stacked" id="activity-statement-frequency-1">
			<label class="label-top" for="opt1"><input type="radio" name="statements" id="opt1" /> <span>09:00 - 10:00</span></label>
			<label class="label-middle" for="opt2"><input type="radio" name="statements" id="opt2" /> <span>10:00 - 11:00</span></label>
			<label class="label-middle" for="opt3"><input type="radio" name="statements" id="opt3" /> <span>11:00 - 12:00</span></label>
			<label class="label-middle" for="opt4"><input type="radio" name="statements" id="opt4" /> <span>12:00 - 13:00</span></label>
			<label class="label-bottom" for="opt5"><input type="radio" name="statements" id="opt5" /> <span>13:00 - 14:00</span></label>
		</div>
	</fieldset>
	<div class="col4 last">
		<fieldset>
			<legend>Question? (multiple longer options class="stacked full-width")</legend>
			<div class="radio-toggle stacked full-width" id="activity-statement-frequency-1">
				<label class="label-top" for="opt1a"><input type="radio" name="statements" id="opt1a" /> <span>Australian Capital Territory</span></label>
				<label class="label-middle" for="opt2a"><input type="radio" name="statements" id="opt2a" /> <span>New South Wales</span></label>
				<label class="label-middle" for="opt3a"><input type="radio" name="statements" id="opt3a" /> <span>Northern Territory</span></label>
				<label class="label-middle" for="opt4a"><input type="radio" name="statements" id="opt4a" /> <span>Queensland</span></label>
				<label class="label-middle" for="opt5a"><input type="radio" name="statements" id="opt5a" /> <span>South Australia</span></label>
				<label class="label-middle" for="opt6a"><input type="radio" name="statements" id="opt6a" /> <span>Tasmania</span></label>
				<label class="label-middle" for="opt7a"><input type="radio" name="statements" id="opt7a" /> <span>Victoria</span></label>
				<label class="label-bottom" for="opt8a"><input type="radio" name="statements" id="opt8a" /> <span>Western Australia</span></label>
			</div>
		</fieldset>
	</div>
</div><!-- custom-controls -->

<p>
	<label for="password">Password:</label><br />
	<input type="password" class="password" id="password" />
</p>

<h2>HTML5-specific Form Elements</h2>

<p>
	<label for="email">Email:</label><br />
	<input type="email" id="email" />
</p>

<p>
	<label for="url">URL:</label><br />
	<input type="url" id="url" />
</p>

<p>
	<label for="tel">Telephone:</label><br />
	<input type="tel" id="tel" />
</p>

<p>
	<label for="number">Number:</label><br />
	<input type="number" id="number" min="0" max="10" step="1" value="5" />
</p>

<p>
	<label for="search">Search:</label><br />
	<input type="search" id="search" />
</p>

<p>
	<label for="date">Date:</label><br />
	<input type="date" id="date" />
</p>
