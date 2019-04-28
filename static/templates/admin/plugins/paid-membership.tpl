<form role="form" class="paid-membership-settings">
	<div class="row">
		<div class="col-sm-2 col-xs-12 settings-header">Settings</div>
		<div class="col-sm-10 col-xs-12">
			<div class="panel panel-primary">
			    <ul style="list-style: none;">
			        <li>Create checkout on <a href="https://interkassa.com" target="_blank">interkassa.com</a></li>
			        <li>Checkout settings -> Interface</li>
			        <li>
                        <ul style="list-style: none;">
                            <li><strong>Success URL:</strong> GET <code>https://example.com/?status=success</code></li>
                            <li><strong>Fail URL:</strong> GET <code>https://example.com/?status=fail</code></li>
                            <li><strong>Pending URL:</strong> GET <code>https://example.com/?status=pending</code></li>
                            <li><strong>Interaction URL:</strong> POST <code>https://example.com/interaction</code></li>
                        </ul>
			        </li>
			    </ul>
			</div>
            <div class="form-group">
				<label for="key">Sign key</label>
				<input type="text" id="key" name="key" title="Sign key" class="form-control" placeholder="VYZ1aGgkqmzyQshG">
			</div>
			<div class="form-group">
				<label for="ik_co_id">ID</label>
				<input type="text" id="ik_co_id" name="ik_co_id" title="ID" class="form-control" placeholder="4f269503a1da92c807000002">
			</div>
		</div>
	</div>

	<div class="row">
	    <div class="col-sm-2 col-xs-12 settings-header">Price</div>
	    <div class="col-sm-5 col-xs-12">
            <div class="form-group">
                <label for="ik_am">Amount</label>
                <input type="text" id="ik_am" name="ik_am" title="Amount" class="form-control" placeholder="99.99">
            </div>
        </div>
        <div class="col-sm-5 col-xs-12">
            <div class="form-group">
                <label for="ik_cur">Currency</label>
                <select name="ik_cur" id="ik_cur" class="form-control">
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="RUB">RUB</option>
                </select>
            </div>
        </div>
    </div>

	<div class="row">
        <div class="col-sm-2 col-xs-12 settings-header">Description</div>
        <div class="col-sm-10 col-xs-12">
            <input type="text" id="ik_desc" name="ik_desc" title="Description" class="form-control" placeholder="Paid Membership">
            <br/>
        </div>
    </div>

	<div class="row">
		<div class="col-sm-2 col-xs-12 settings-header">Paid Group</div>
		<div class="col-sm-10 col-xs-12">
			<select name="paid-group" id="paid-group" class="form-control">
				<!-- BEGIN groups -->
				<option value="{groups.value}">{groups.name}</option>
				<!-- END groups -->
			</select>
			<br/><br/>
		</div>
	</div>
</form>
<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
	<i class="material-icons">save</i>
</button>