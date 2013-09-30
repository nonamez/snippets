<?php

private function _simpleAjaxResult($input_data = FALSE, $show_data_on_error = FALSE)
{
	$result = isset($input_data['error']) ? (! (bool) $input_data['error']) : FALSE;

	if (isset($input_data['data']))
		$data = $result ? $input_data['data'] : ($show_data_on_error ? $input_data['data'] : NULL);
	else
		$data = NULL;
	
	if (isset($input_data['message'])) {
		if (is_array($input_data['message']))
			$message = $result ? $input_data['message'][0] : $input_data['message'][1];
		else
			$message = $input_data['message'];
	}
	else
		$message = $result ? 'Operation completed successfully.' : 'Error occurred. Please try again.';

	$result = array('status' => $result, 'message' => $message, 'data' => $data);

	die(json_encode($result));
}

private function _filterFields($basic_fields)
{
	$tmp_basic_array = array(
		'company_name' => '',
		'company_code' => '',
		'phone' => '',
		'email' => '',
		'website' => '',
		'address' => '',
		'bank' => '',
		'iban' => '',
		'swift' => '',
		'bill_to' => '',
		'custom_text' => ''
	);

	$basic_fields = array_intersect_key($basic_fields, $tmp_basic_array) + $tmp_basic_array;

	ksort($basic_fields);
	
	return $basic_fields;
}

// $this->arrayToSimpleXml($data, new SimpleXMLElement('<map/>'))->asXML())
private function arrayToSimpleXml($data, SimpleXMLElement $xml)
{
	if (!is_array($data) && !is_object($data))
		return $xml;
	
	foreach ($data as $key => $value) {
		if (is_array($value))
			$this->arrayToSimpleXml($value, $xml->addChild($key));
		else
			$xml->addChild($key, $value);
	}
	
	return $xml;
}

private function simpleXmlToArray($xml)
{
	$result_array = array();
	
	foreach ($xml as $index => $node )
		$result_array[$index] = is_object($node) ? $this->simpleXmlToArray($node) : $node;
	
	return $result_array;
}
