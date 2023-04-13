{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 5,
			"revision" : 3,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 1314.0, 84.0, 895.0, 562.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-95",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 236.829261779785156, 18.512195587158203, 70.0, 22.0 ],
					"text" : "loadmess 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-94",
					"maxclass" : "preset",
					"numinlets" : 1,
					"numoutlets" : 5,
					"outlettype" : [ "preset", "int", "preset", "int", "" ],
					"patching_rect" : [ 236.829261779785156, 51.756097793579102, 100.0, 40.0 ],
					"preset_data" : [ 						{
							"number" : 1,
							"data" : [ 5, "obj-16", "attrui", "attr", "pitchshift", 5, "obj-16", "attrui", "float", 0.9, 5, "obj-15", "attrui", "attr", "timestretch", 5, "obj-15", "attrui", "int", 1, 5, "obj-2", "playlist~", "preset_count", 1, 7, "obj-2", "playlist~", "preset_clipstate", 1, "filekind", "audiofile", 7, "obj-2", "playlist~", "preset_clipstate", 1, "absolutepath", "isthatyou.aiff", 7, "obj-2", "playlist~", "preset_clipstate", 1, "filename", "isthatyou.aiff", 7, "obj-2", "playlist~", "preset_clipstate", 1, "loop", 0, 8, "obj-2", "playlist~", "preset_clipstate", 1, "selection", 0.010526315789474, 1.0, 7, "obj-2", "playlist~", "preset_clipstate", 1, "id", "u552000332", 4, "obj-2", "playlist~", "preset_execute", 5, "obj-12", "toggle", "int", 1, 5, "obj-14", "number", "int", 1250, 5, "obj-27", "flonum", "float", 0.25, 5, "obj-24", "kslider", "int", 60, 5, "obj-80", "attrui", "attr", "edit_mode", 5, "obj-80", "attrui", "int", 1, 5, "obj-79", "flonum", "float", 566.82647705078125, 5, "obj-78", "flonum", "float", 1.33306896686554, 5, "obj-77", "flonum", "float", 1.0, 5, "obj-72", "filtergraph~", "nfilters", 1, 9, "obj-72", "filtergraph~", "setoptions", 0, 1, 1, 0, 0, 8, "obj-72", "filtergraph~", "params", 0, 566.82647705078125, 1.33306896686554, 1.0, 5, "obj-48", "kslider", "int", 39, 5, "obj-62", "kslider", "int", 36 ]
						}
 ]
				}

			}
, 			{
				"box" : 				{
					"autosave" : 1,
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-93",
					"linecount" : 3,
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 4,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal", "", "" ],
					"patching_rect" : [ 1365.025647521018982, 542.41877543926239, 262.0, 196.0 ],
					"presentation_linecount" : 3,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_invisible" : 1,
							"parameter_longname" : "amxd~[4]",
							"parameter_shortname" : "amxd~[4]",
							"parameter_type" : 3
						}

					}
,
					"saved_object_attributes" : 					{
						"parameter_enable" : 1,
						"patchername" : "Comber.amxd",
						"patchername_fallback" : "C74:/packages/Max for Live/patchers/Max Audio Effect/Comber/Comber.amxd"
					}
,
					"snapshot" : 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "snapshotlist",
						"origin" : "max~",
						"type" : "list",
						"subtype" : "Undefined",
						"embed" : 1,
						"snapshot" : 						{
							"name" : "Comber.amxd",
							"origname" : "C74:/packages/Max for Live/patchers/Max Audio Effect/Comber/Comber.amxd",
							"valuedictionary" : 							{
								"parameter_values" : 								{
									"amount" : 1.0,
									"feedback" : 74.000000000000028,
									"feedfwd" : 59.677165354330754,
									"left" : 0.520188976377952,
									"offset" : 0.496062992125985,
									"right" : 0.62267716535433,
									"speed_range" : 0.929133858267715,
									"wet/dry" : 81.889763779527442
								}

							}

						}
,
						"snapshotlist" : 						{
							"current_snapshot" : 0,
							"entries" : [ 								{
									"filetype" : "C74Snapshot",
									"version" : 2,
									"minorversion" : 0,
									"name" : "Comber.amxd",
									"origin" : "Comber.amxd",
									"type" : "amxd",
									"subtype" : "Undefined",
									"embed" : 0,
									"snapshot" : 									{
										"name" : "Comber.amxd",
										"origname" : "C74:/packages/Max for Live/patchers/Max Audio Effect/Comber/Comber.amxd",
										"valuedictionary" : 										{
											"parameter_values" : 											{
												"amount" : 1.0,
												"feedback" : 74.000000000000028,
												"feedfwd" : 59.677165354330754,
												"left" : 0.520188976377952,
												"offset" : 0.496062992125985,
												"right" : 0.62267716535433,
												"speed_range" : 0.929133858267715,
												"wet/dry" : 81.889763779527442
											}

										}

									}
,
									"fileref" : 									{
										"name" : "Comber.amxd",
										"filename" : "Comber.amxd.maxsnap",
										"filepath" : "~/OneDrive/Documents/Max 8/Snapshots",
										"filepos" : -1,
										"snapshotfileid" : "d918a0e2b036b52fc9bff6f05f2ecacf"
									}

								}
 ]
						}

					}
,
					"text" : "amxd~ \"C74:/packages/Max for Live/patchers/Max Audio Effect/Comber/Comber.amxd\"",
					"varname" : "amxd~[4]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-92",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1274.358898401260376, 21.794870495796204, 50.0, 22.0 ],
					"text" : "1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-90",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 1295.76915442943573, 49.461540699005127, 34.0, 22.0 ],
					"text" : "sel 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-89",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1317.948639392852783, 84.615379571914673, 29.5, 22.0 ],
					"text" : "38"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-87",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 1226.923003792762756, 52.564099431037903, 34.0, 22.0 ],
					"text" : "sel 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-81",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 1222.762747764587402, 17.948716878890991, 29.5, 22.0 ],
					"text" : "% 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-70",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1226.923003792762756, 85.897430777549744, 29.5, 22.0 ],
					"text" : "36"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-68",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1260.256335139274597, 133.333325386047363, 29.5, 22.0 ],
					"text" : "42"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-66",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1304.054896831512451, 151.5, 147.674418568611145, 48.0 ],
					"text" : " 42 - high hat\n36 - kick\n38 - snare"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-61",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 3,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 1589.0, 149.0, 640.0, 480.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 1,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 1,
						"objectsnaponopen" : 1,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"lefttoolbarpinned" : 0,
						"toptoolbarpinned" : 0,
						"righttoolbarpinned" : 0,
						"bottomtoolbarpinned" : 0,
						"toolbars_unpinned_last_save" : 0,
						"tallnewobj" : 0,
						"boxanimatetime" : 200,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"style" : "",
						"subpatcher_template" : "",
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"bubble" : 1,
									"id" : "obj-11",
									"linecount" : 3,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 180.0, 165.0, 190.0, 52.0 ],
									"text" : "convert the  pitch and velocity integers into properly formatted raw midi messages"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 50.0, 306.0, 167.0, 20.0 ],
									"text" : "Who wants a MIDI massage?"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-1",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 50.0, 244.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"id" : "obj-4",
									"maxclass" : "newobj",
									"numinlets" : 7,
									"numoutlets" : 2,
									"outlettype" : [ "int", "" ],
									"patching_rect" : [ 50.0, 179.0, 108.0, 23.0 ],
									"text" : "midiformat"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"id" : "obj-7",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.0, 141.0, 118.0, 23.0 ],
									"text" : "join"
								}

							}
, 							{
								"box" : 								{
									"fontface" : 0,
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"id" : "obj-8",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 2,
									"outlettype" : [ "float", "float" ],
									"patching_rect" : [ 50.0, 100.0, 118.0, 23.0 ],
									"text" : "makenote 60 1000"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-9",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"patching_rect" : [ 50.0, 40.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-10",
									"index" : 2,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"patching_rect" : [ 99.5, 40.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-8", 1 ],
									"source" : [ "obj-10", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-4", 0 ],
									"midpoints" : [ 59.5, 174.0, 59.5, 174.0 ],
									"source" : [ "obj-7", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-7", 1 ],
									"source" : [ "obj-8", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-7", 0 ],
									"midpoints" : [ 59.5, 125.0, 59.5, 125.0 ],
									"source" : [ "obj-8", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-8", 0 ],
									"source" : [ "obj-9", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 1263.953617300306178, 290.315785884857178, 98.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p midimassage"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-62",
					"maxclass" : "kslider",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "int", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1260.256335139274597, 205.918780088424683, 252.0, 53.0 ],
					"range" : 36
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-60",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 866.848383750234348, 470.315754890441895, 59.0, 22.0 ],
					"text" : "random 7"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-58",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 866.848383750234348, 446.315754890441895, 34.0, 22.0 ],
					"text" : "sel 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-57",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 870.174399282251102, 526.658541440963745, 29.5, 22.0 ],
					"text" : "- 24"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-45",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 870.006278242383701, 498.351971745491028, 189.0, 22.0 ],
					"text" : "zl.lookup 60 65 67 63 65 58 63 70"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-47",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 3,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 1589.0, 149.0, 640.0, 480.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 1,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 1,
						"objectsnaponopen" : 1,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"lefttoolbarpinned" : 0,
						"toptoolbarpinned" : 0,
						"righttoolbarpinned" : 0,
						"bottomtoolbarpinned" : 0,
						"toolbars_unpinned_last_save" : 0,
						"tallnewobj" : 0,
						"boxanimatetime" : 200,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"style" : "",
						"subpatcher_template" : "",
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"bubble" : 1,
									"id" : "obj-11",
									"linecount" : 3,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 180.0, 165.0, 190.0, 52.0 ],
									"text" : "convert the  pitch and velocity integers into properly formatted raw midi messages"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 50.0, 306.0, 167.0, 20.0 ],
									"text" : "Who wants a MIDI massage?"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-1",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 50.0, 244.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"id" : "obj-4",
									"maxclass" : "newobj",
									"numinlets" : 7,
									"numoutlets" : 2,
									"outlettype" : [ "int", "" ],
									"patching_rect" : [ 50.0, 179.0, 108.0, 23.0 ],
									"text" : "midiformat"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"id" : "obj-7",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.0, 141.0, 118.0, 23.0 ],
									"text" : "join"
								}

							}
, 							{
								"box" : 								{
									"fontface" : 0,
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"id" : "obj-8",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 2,
									"outlettype" : [ "float", "float" ],
									"patching_rect" : [ 50.0, 100.0, 118.0, 23.0 ],
									"text" : "makenote 60 1000"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-9",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"patching_rect" : [ 50.0, 40.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-10",
									"index" : 2,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"patching_rect" : [ 99.5, 40.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-8", 1 ],
									"source" : [ "obj-10", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-4", 0 ],
									"midpoints" : [ 59.5, 174.0, 59.5, 174.0 ],
									"source" : [ "obj-7", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-7", 1 ],
									"source" : [ "obj-8", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-7", 0 ],
									"midpoints" : [ 59.5, 125.0, 59.5, 125.0 ],
									"source" : [ "obj-8", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-8", 0 ],
									"source" : [ "obj-9", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 870.006278242383701, 634.263126492500305, 98.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p midimassage"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-48",
					"maxclass" : "kslider",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "int", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 870.174399282251102, 579.263126492500305, 336.0, 53.0 ]
				}

			}
, 			{
				"box" : 				{
					"autosave" : 1,
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-44",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 4,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal", "", "" ],
					"patching_rect" : [ 858.686103429113246, 669.290107011795044, 525.0, 196.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_invisible" : 1,
							"parameter_longname" : "amxd~[3]",
							"parameter_shortname" : "amxd~[3]",
							"parameter_type" : 3
						}

					}
,
					"saved_object_attributes" : 					{
						"parameter_enable" : 1,
						"patchername" : "Bassline.amxd",
						"patchername_fallback" : "C74:/packages/Max for Live/patchers/Max Instrument/Bassline/Bassline.amxd"
					}
,
					"snapshot" : 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "snapshotlist",
						"origin" : "max~",
						"type" : "list",
						"subtype" : "Undefined",
						"embed" : 1,
						"snapshot" : 						{
							"name" : "Bassline.amxd",
							"origname" : "C74:/packages/Max for Live/patchers/Max Instrument/Bassline/Bassline.amxd",
							"valuedictionary" : 							{
								"parameter_values" : 								{
									"2nd_wave" : 0.0,
									"attack" : 72.0,
									"attack_filt" : 75.0,
									"cut" : 0.0,
									"decay" : 47.0,
									"decay_filt" : 22.0,
									"env" : 88.0,
									"filt_type" : 0.0,
									"glide" : 0.0,
									"key" : 0.0,
									"level" : 0.0,
									"mod_filt" : 0.0,
									"mod_wave" : 0.0,
									"polyphony" : 1.0,
									"release" : 127.0,
									"release_filt" : 102.0,
									"res" : 0.0,
									"speed" : 68.0,
									"subosc" : 127.0,
									"sustain" : 127.0,
									"sustain_filt" : 78.0,
									"wave" : 0.0
								}

							}

						}
,
						"snapshotlist" : 						{
							"current_snapshot" : 0,
							"entries" : [ 								{
									"filetype" : "C74Snapshot",
									"version" : 2,
									"minorversion" : 0,
									"name" : "Bassline.amxd",
									"origin" : "Bassline.amxd",
									"type" : "amxd",
									"subtype" : "Undefined",
									"embed" : 0,
									"snapshot" : 									{
										"name" : "Bassline.amxd",
										"origname" : "C74:/packages/Max for Live/patchers/Max Instrument/Bassline/Bassline.amxd",
										"valuedictionary" : 										{
											"parameter_values" : 											{
												"2nd_wave" : 0.0,
												"attack" : 72.0,
												"attack_filt" : 75.0,
												"cut" : 0.0,
												"decay" : 47.0,
												"decay_filt" : 22.0,
												"env" : 88.0,
												"filt_type" : 0.0,
												"glide" : 0.0,
												"key" : 0.0,
												"level" : 0.0,
												"mod_filt" : 0.0,
												"mod_wave" : 0.0,
												"polyphony" : 1.0,
												"release" : 127.0,
												"release_filt" : 102.0,
												"res" : 0.0,
												"speed" : 68.0,
												"subosc" : 127.0,
												"sustain" : 127.0,
												"sustain_filt" : 78.0,
												"wave" : 0.0
											}

										}

									}
,
									"fileref" : 									{
										"name" : "Bassline.amxd",
										"filename" : "Bassline.amxd.maxsnap",
										"filepath" : "~/OneDrive/Documents/Max 8/Snapshots",
										"filepos" : -1,
										"snapshotfileid" : "aead8aebd7b564fdd0e0e62de87a9de1"
									}

								}
 ]
						}

					}
,
					"text" : "amxd~ \"C74:/packages/Max for Live/patchers/Max Instrument/Bassline/Bassline.amxd\"",
					"varname" : "amxd~[3]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"id" : "obj-72",
					"linmarkers" : [ 0.0, 11025.0, 16537.5 ],
					"logmarkers" : [ 0.0, 100.0, 1000.0, 10000.0 ],
					"maxclass" : "filtergraph~",
					"nfilters" : 1,
					"numinlets" : 8,
					"numoutlets" : 7,
					"outlettype" : [ "list", "float", "float", "float", "float", "list", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 866.848383750234348, 284.418780088424683, 360.0, 155.0 ],
					"setfilter" : [ 0, 1, 1, 0, 0, 566.82647705078125, 1.33306896686554, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"hidden" : 1,
					"id" : "obj-73",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1167.098383750234461, 214.918780088424683, 48.0, 23.0 ],
					"text" : "set $1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"hidden" : 1,
					"id" : "obj-74",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1083.598383750234461, 220.918780088424683, 48.0, 23.0 ],
					"text" : "set $1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"hidden" : 1,
					"id" : "obj-75",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 988.598383750234461, 214.918780088424683, 48.0, 23.0 ],
					"text" : "set $1"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"bubbleside" : 2,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-76",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1151.098383750234461, 165.418780088424683, 73.0, 40.0 ],
					"text" : "set Q or S"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"format" : 6,
					"id" : "obj-77",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1163.598383750234461, 250.418780088424683, 55.0, 23.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"format" : 6,
					"id" : "obj-78",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1083.598383750234461, 250.418780088424683, 55.0, 23.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"format" : 6,
					"id" : "obj-79",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 993.598383750234461, 250.418780088424683, 57.0, 23.0 ]
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"bubbleside" : 2,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-82",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 973.210671688829279, 157.918780088424683, 88.25, 55.0 ],
					"presentation_linecount" : 2,
					"text" : "set cutoff or center freq"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"bubbleside" : 2,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-83",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1083.598383750234461, 176.418780088424683, 59.0, 40.0 ],
					"text" : "set gain"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"bubbleside" : 2,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-85",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 831.848383750234348, 195.418780088424683, 118.0, 40.0 ],
					"text" : "set filter response"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-42",
					"maxclass" : "newobj",
					"numinlets" : 6,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 564.321169465780258, 489.930919766426086, 92.0, 23.0 ],
					"text" : "biquad~"
				}

			}
, 			{
				"box" : 				{
					"attr" : "edit_mode",
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-80",
					"lock" : 1,
					"maxclass" : "attrui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"orientation" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 866.848383750234348, 227.418780088424683, 83.0, 46.0 ],
					"text_width" : 83.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-43",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 905.45980026892255, 419.212875068187714, 150.0, 20.0 ],
					"text" : "preset"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-37",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 614.0, 73.0, 50.0, 22.0 ],
					"text" : "1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-35",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 540.168121039867401, 61.000001549720764, 29.5, 22.0 ],
					"text" : "% 8"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-31",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 85.0, 174.0, 50.0, 22.0 ],
					"text" : "select 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-28",
					"maxclass" : "newobj",
					"numinlets" : 5,
					"numoutlets" : 4,
					"outlettype" : [ "int", "", "", "int" ],
					"patching_rect" : [ 85.0, 104.0, 75.0, 22.0 ],
					"text" : "counter 0 32"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-46",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 540.168121039867401, 111.230192840099335, 189.0, 22.0 ],
					"text" : "zl.lookup 60 65 67 63 65 58 63 70"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 3,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 1589.0, 149.0, 640.0, 480.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 1,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 1,
						"objectsnaponopen" : 1,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"lefttoolbarpinned" : 0,
						"toptoolbarpinned" : 0,
						"righttoolbarpinned" : 0,
						"bottomtoolbarpinned" : 0,
						"toolbars_unpinned_last_save" : 0,
						"tallnewobj" : 0,
						"boxanimatetime" : 200,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"style" : "",
						"subpatcher_template" : "",
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"bubble" : 1,
									"id" : "obj-11",
									"linecount" : 3,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 180.0, 165.0, 190.0, 52.0 ],
									"text" : "convert the  pitch and velocity integers into properly formatted raw midi messages"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 50.0, 306.0, 167.0, 20.0 ],
									"text" : "Who wants a MIDI massage?"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-1",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 50.0, 244.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"id" : "obj-4",
									"maxclass" : "newobj",
									"numinlets" : 7,
									"numoutlets" : 2,
									"outlettype" : [ "int", "" ],
									"patching_rect" : [ 50.0, 179.0, 108.0, 23.0 ],
									"text" : "midiformat"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"id" : "obj-7",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.0, 141.0, 118.0, 23.0 ],
									"text" : "join"
								}

							}
, 							{
								"box" : 								{
									"fontface" : 0,
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"id" : "obj-8",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 2,
									"outlettype" : [ "float", "float" ],
									"patching_rect" : [ 50.0, 100.0, 118.0, 23.0 ],
									"text" : "makenote 60 1000"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-9",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"patching_rect" : [ 50.0, 40.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-10",
									"index" : 2,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"patching_rect" : [ 99.5, 40.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-8", 1 ],
									"source" : [ "obj-10", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-4", 0 ],
									"midpoints" : [ 59.5, 174.0, 59.5, 174.0 ],
									"source" : [ "obj-7", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-7", 1 ],
									"source" : [ "obj-8", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-7", 0 ],
									"midpoints" : [ 59.5, 125.0, 59.5, 125.0 ],
									"source" : [ "obj-8", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-8", 0 ],
									"source" : [ "obj-9", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 540.0, 214.0, 98.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p midimassage"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-24",
					"maxclass" : "kslider",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "int", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 540.0, 149.0, 336.0, 53.0 ]
				}

			}
, 			{
				"box" : 				{
					"autosave" : 1,
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-22",
					"linecount" : 3,
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 4,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal", "", "" ],
					"patching_rect" : [ 540.0, 257.682926654815674, 250.0, 196.0 ],
					"presentation_linecount" : 3,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_invisible" : 1,
							"parameter_longname" : "amxd~[2]",
							"parameter_shortname" : "amxd~[2]",
							"parameter_type" : 3
						}

					}
,
					"saved_object_attributes" : 					{
						"parameter_enable" : 1,
						"patchername" : "Big Ben Bell.amxd",
						"patchername_fallback" : "C74:/packages/Max for Live/patchers/Max Instrument/Big Ben Bell/Big Ben Bell.amxd"
					}
,
					"snapshot" : 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "snapshotlist",
						"origin" : "max~",
						"type" : "list",
						"subtype" : "Undefined",
						"embed" : 1,
						"snapshot" : 						{
							"name" : "Big Ben Bell.amxd",
							"origname" : "C74:/packages/Max for Live/patchers/Max Instrument/Big Ben Bell/Big Ben Bell.amxd",
							"valuedictionary" : 							{
								"parameter_values" : 								{
									"attack" : 42.99999999999995,
									"decay" : 91.999999999999943,
									"harmonic" : 0.0,
									"level" : 0.0,
									"polyphony" : 8.0,
									"stereo" : 64.0
								}

							}

						}
,
						"snapshotlist" : 						{
							"current_snapshot" : 0,
							"entries" : [ 								{
									"filetype" : "C74Snapshot",
									"version" : 2,
									"minorversion" : 0,
									"name" : "Big Ben Bell.amxd",
									"origin" : "Big Ben Bell.amxd",
									"type" : "amxd",
									"subtype" : "Undefined",
									"embed" : 0,
									"snapshot" : 									{
										"name" : "Big Ben Bell.amxd",
										"origname" : "C74:/packages/Max for Live/patchers/Max Instrument/Big Ben Bell/Big Ben Bell.amxd",
										"valuedictionary" : 										{
											"parameter_values" : 											{
												"attack" : 42.99999999999995,
												"decay" : 91.999999999999943,
												"harmonic" : 0.0,
												"level" : 0.0,
												"polyphony" : 8.0,
												"stereo" : 64.0
											}

										}

									}
,
									"fileref" : 									{
										"name" : "Big Ben Bell.amxd",
										"filename" : "Big Ben Bell.amxd.maxsnap",
										"filepath" : "~/OneDrive/Documents/Max 8/Snapshots",
										"filepos" : -1,
										"snapshotfileid" : "26c31320d60f226dfa1a54d9d9bfe8fd"
									}

								}
 ]
						}

					}
,
					"text" : "amxd~ \"C74:/packages/Max for Live/patchers/Max Instrument/Big Ben Bell/Big Ben Bell.amxd\"",
					"varname" : "amxd~[2]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"autosave" : 1,
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-18",
					"linecount" : 2,
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 4,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal", "", "" ],
					"patching_rect" : [ 84.829261779785156, 302.048782348632812, 403.0, 196.0 ],
					"presentation_linecount" : 2,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_invisible" : 1,
							"parameter_longname" : "amxd~[1]",
							"parameter_shortname" : "amxd~[1]",
							"parameter_type" : 3
						}

					}
,
					"saved_object_attributes" : 					{
						"parameter_enable" : 1,
						"patchername" : "ChamberVerb.amxd",
						"patchername_fallback" : "C74:/packages/Max for Live/patchers/Max Audio Effect/Chamberverb/ChamberVerb.amxd"
					}
,
					"snapshot" : 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "snapshotlist",
						"origin" : "max~",
						"type" : "list",
						"subtype" : "Undefined",
						"embed" : 1,
						"snapshot" : 						{
							"name" : "ChamberVerb.amxd",
							"origname" : "C74:/packages/Max for Live/patchers/Max Audio Effect/Chamberverb/ChamberVerb.amxd",
							"valuedictionary" : 							{
								"parameter_values" : 								{
									"1_delay" : 87.206297212598443,
									"1_feedback" : 74.0,
									"2_delay" : 112.996458692913336,
									"2_feedback" : 78.0,
									"3_delay" : 104.113386826771603,
									"3_feedback" : 72.0,
									"45_delay" : 133.752754905511722,
									"45_feedback" : 51.0,
									"45_moddepth" : 0.472440944881905,
									"45_modfreq" : 1.102362204724415,
									"67_delay" : 39.004724409448826,
									"67_feedback" : 73.0,
									"filter_cutoff" : 8404.724409448825099,
									"live.toggle" : 0.0,
									"wet_dry" : 82.0
								}

							}

						}
,
						"snapshotlist" : 						{
							"current_snapshot" : 0,
							"entries" : [ 								{
									"filetype" : "C74Snapshot",
									"version" : 2,
									"minorversion" : 0,
									"name" : "ChamberVerb.amxd",
									"origin" : "ChamberVerb.amxd",
									"type" : "amxd",
									"subtype" : "Undefined",
									"embed" : 0,
									"snapshot" : 									{
										"name" : "ChamberVerb.amxd",
										"origname" : "C74:/packages/Max for Live/patchers/Max Audio Effect/Chamberverb/ChamberVerb.amxd",
										"valuedictionary" : 										{
											"parameter_values" : 											{
												"1_delay" : 87.206297212598443,
												"1_feedback" : 74.0,
												"2_delay" : 112.996458692913336,
												"2_feedback" : 78.0,
												"3_delay" : 104.113386826771603,
												"3_feedback" : 72.0,
												"45_delay" : 133.752754905511722,
												"45_feedback" : 51.0,
												"45_moddepth" : 0.472440944881905,
												"45_modfreq" : 1.102362204724415,
												"67_delay" : 39.004724409448826,
												"67_feedback" : 73.0,
												"filter_cutoff" : 8404.724409448825099,
												"live.toggle" : 0.0,
												"wet_dry" : 82.0
											}

										}

									}
,
									"fileref" : 									{
										"name" : "ChamberVerb.amxd",
										"filename" : "ChamberVerb.amxd.maxsnap",
										"filepath" : "~/OneDrive/Documents/Max 8/Snapshots",
										"filepos" : -1,
										"snapshotfileid" : "9aab840c3d3f26611ec05d2748dd79cd"
									}

								}
 ]
						}

					}
,
					"text" : "amxd~ \"C74:/packages/Max for Live/patchers/Max Audio Effect/Chamberverb/ChamberVerb.amxd\"",
					"varname" : "amxd~[1]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"autosave" : 1,
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-17",
					"linecount" : 2,
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 4,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal", "", "" ],
					"patching_rect" : [ 1263.953617300306178, 324.351971745491028, 467.0, 196.0 ],
					"presentation_linecount" : 2,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_invisible" : 1,
							"parameter_longname" : "amxd~",
							"parameter_shortname" : "amxd~",
							"parameter_type" : 3
						}

					}
,
					"saved_object_attributes" : 					{
						"parameter_enable" : 1,
						"patchername" : "Analogue Drums.amxd",
						"patchername_fallback" : "C74:/packages/Max for Live/patchers/Max Instrument/Analogue Drums/Analogue Drums.amxd"
					}
,
					"snapshot" : 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "snapshotlist",
						"origin" : "max~",
						"type" : "list",
						"subtype" : "Undefined",
						"embed" : 1,
						"snapshot" : 						{
							"name" : "Analogue Drums.amxd",
							"origname" : "C74:/packages/Max for Live/patchers/Max Instrument/Analogue Drums/Analogue Drums.amxd",
							"valuedictionary" : 							{
								"parameter_values" : 								{
									"ad-level" : 0.0,
									"clhat-decay" : 262.677165354330896,
									"hat-level" : 80.0,
									"hat-tone" : 37.0,
									"kick-attack" : 33.0,
									"kick-decay" : 1837.637795275588815,
									"kick-level" : 28.0,
									"kick-sweep" : 27.0,
									"kick-tune" : 64.0,
									"ophat-decay" : 1800.0,
									"snare-decay" : 669.842519685039747,
									"snare-hicut" : 700.0,
									"snare-level" : 50.0,
									"snare-snap" : 23.0,
									"snare-tune" : 205.905511811023672,
									"tom-decay" : 600.0,
									"tom-hi" : 450.0,
									"tom-level" : 64.0,
									"tom-low" : 100.0,
									"tom-mid" : 200.0
								}

							}

						}
,
						"snapshotlist" : 						{
							"current_snapshot" : 0,
							"entries" : [ 								{
									"filetype" : "C74Snapshot",
									"version" : 2,
									"minorversion" : 0,
									"name" : "Analogue Drums.amxd",
									"origin" : "Analogue Drums.amxd",
									"type" : "amxd",
									"subtype" : "Undefined",
									"embed" : 0,
									"snapshot" : 									{
										"name" : "Analogue Drums.amxd",
										"origname" : "C74:/packages/Max for Live/patchers/Max Instrument/Analogue Drums/Analogue Drums.amxd",
										"valuedictionary" : 										{
											"parameter_values" : 											{
												"ad-level" : 0.0,
												"clhat-decay" : 262.677165354330896,
												"hat-level" : 80.0,
												"hat-tone" : 37.0,
												"kick-attack" : 33.0,
												"kick-decay" : 1837.637795275588815,
												"kick-level" : 28.0,
												"kick-sweep" : 27.0,
												"kick-tune" : 64.0,
												"ophat-decay" : 1800.0,
												"snare-decay" : 669.842519685039747,
												"snare-hicut" : 700.0,
												"snare-level" : 50.0,
												"snare-snap" : 23.0,
												"snare-tune" : 205.905511811023672,
												"tom-decay" : 600.0,
												"tom-hi" : 450.0,
												"tom-level" : 64.0,
												"tom-low" : 100.0,
												"tom-mid" : 200.0
											}

										}

									}
,
									"fileref" : 									{
										"name" : "Analogue Drums.amxd",
										"filename" : "Analogue Drums.amxd.maxsnap",
										"filepath" : "~/OneDrive/Documents/Max 8/Snapshots",
										"filepos" : -1,
										"snapshotfileid" : "73a42b886b47685c9ba8a2c533acc0f2"
									}

								}
 ]
						}

					}
,
					"text" : "amxd~ \"C74:/packages/Max for Live/patchers/Max Instrument/Analogue Drums/Analogue Drums.amxd\"",
					"varname" : "amxd~",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"format" : 6,
					"id" : "obj-27",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 232.517572402954102, 140.436173915863037, 50.0, 23.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_initial" : [ 0.5 ],
							"parameter_initial_enable" : 1,
							"parameter_invisible" : 1,
							"parameter_longname" : "number",
							"parameter_shortname" : "number",
							"parameter_type" : 3
						}

					}
,
					"varname" : "number"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-25",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 232.517572402954102, 169.436173915863037, 113.0, 23.0 ],
					"text" : "setclip 1 speed $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 134.829261779785156, 18.512195587158203, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 84.829261779785156, 18.512195587158203, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 84.829261779785156, 51.756097793579102, 69.0, 22.0 ],
					"text" : "metro 1000"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 84.829261779785156, 216.682926654815674, 29.5, 22.0 ],
					"text" : "1"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-1",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "o.jm.korgnanokontrol.s~.maxpat",
					"numinlets" : 8,
					"numoutlets" : 8,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal" ],
					"patching_rect" : [ 84.829261779785156, 664.658541440963745, 740.0, 25.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-6",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "o.jm.korgnanokontrol.m~.maxpat",
					"numinlets" : 8,
					"numoutlets" : 8,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal" ],
					"patching_rect" : [ 84.829261779785156, 691.658541440963745, 740.0, 25.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-3",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "o.jm.korgnanokontrol.r~.maxpat",
					"numinlets" : 8,
					"numoutlets" : 8,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal" ],
					"patching_rect" : [ 84.829261779785156, 718.658541440963745, 740.0, 25.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-8",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "o.jm.korgnanokontrol.gains~.maxpat",
					"numinlets" : 8,
					"numoutlets" : 8,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal" ],
					"patching_rect" : [ 84.829261779785156, 526.658541440963745, 740.0, 136.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ -30.170738220214844, 632.658541440963745, 150.0, 20.0 ],
					"text" : "ezdac~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "ezdac~",
					"numinlets" : 2,
					"numoutlets" : 0,
					"patching_rect" : [ 84.829261779785156, 781.658541440963745, 45.0, 45.0 ]
				}

			}
, 			{
				"box" : 				{
					"basictuning" : 440,
					"data" : 					{
						"clips" : [ 							{
								"absolutepath" : "isthatyou.aiff",
								"filename" : "isthatyou.aiff",
								"filekind" : "audiofile",
								"id" : "u552000332",
								"selection" : [ 0.010526315789474, 1.0 ],
								"loop" : 0,
								"content_state" : 								{
									"speed" : 0.25,
									"timestretch" : 1,
									"pitchshift" : 0.9
								}

							}
 ]
					}
,
					"followglobaltempo" : 0,
					"formantcorrection" : 0,
					"id" : "obj-2",
					"maxclass" : "playlist~",
					"mode" : "basic",
					"numinlets" : 1,
					"numoutlets" : 5,
					"originallength" : [ 0.0, "ticks" ],
					"originaltempo" : 120.0,
					"outlettype" : [ "signal", "signal", "signal", "", "dictionary" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 84.829261779785156, 257.682926654815674, 150.0, 30.0 ],
					"pitchcorrection" : 0,
					"pitchshift" : [ 0.9 ],
					"pitchshiftcent" : [ -182 ],
					"quality" : "basic",
					"timestretch" : [ 1 ]
				}

			}
, 			{
				"box" : 				{
					"attr" : "timestretch",
					"id" : "obj-15",
					"maxclass" : "attrui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 236.829261779785156, 203.812797069549561, 150.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"attr" : "pitchshift",
					"id" : "obj-16",
					"maxclass" : "attrui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 236.829261779785156, 233.682926654815674, 150.0, 22.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 7 ],
					"source" : [ "obj-1", 7 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 6 ],
					"source" : [ "obj-1", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 5 ],
					"source" : [ "obj-1", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 4 ],
					"source" : [ "obj-1", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 3 ],
					"source" : [ "obj-1", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 2 ],
					"source" : [ "obj-1", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 1 ],
					"source" : [ "obj-1", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-28", 0 ],
					"order" : 1,
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-68", 0 ],
					"order" : 0,
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 2 ],
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 1 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-16", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-93", 1 ],
					"source" : [ "obj-17", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-93", 0 ],
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"source" : [ "obj-18", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-18", 1 ],
					"source" : [ "obj-2", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-18", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-42", 0 ],
					"source" : [ "obj-22", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-42", 0 ],
					"source" : [ "obj-22", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 1 ],
					"midpoints" : [ 866.5, 207.5, 628.5, 207.5 ],
					"source" : [ "obj-24", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"source" : [ "obj-24", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-25", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-25", 0 ],
					"source" : [ "obj-27", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-31", 0 ],
					"order" : 2,
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-35", 0 ],
					"order" : 1,
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-81", 0 ],
					"order" : 0,
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 1 ],
					"order" : 0,
					"source" : [ "obj-3", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"order" : 1,
					"source" : [ "obj-3", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 1 ],
					"order" : 0,
					"source" : [ "obj-3", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"order" : 1,
					"source" : [ "obj-3", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 1 ],
					"order" : 0,
					"source" : [ "obj-3", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"order" : 1,
					"source" : [ "obj-3", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 1 ],
					"order" : 0,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"order" : 1,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-31", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-37", 1 ],
					"order" : 1,
					"source" : [ "obj-35", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-46", 0 ],
					"order" : 2,
					"source" : [ "obj-35", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-58", 0 ],
					"order" : 0,
					"source" : [ "obj-35", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 1 ],
					"source" : [ "obj-42", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 2 ],
					"source" : [ "obj-44", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 2 ],
					"source" : [ "obj-44", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-57", 0 ],
					"source" : [ "obj-45", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-24", 0 ],
					"source" : [ "obj-46", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-44", 2 ],
					"source" : [ "obj-47", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-47", 1 ],
					"midpoints" : [ 1196.674399282251215, 627.763126492500305, 958.506278242383701, 627.763126492500305 ],
					"source" : [ "obj-48", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-47", 0 ],
					"source" : [ "obj-48", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-48", 0 ],
					"source" : [ "obj-57", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"source" : [ "obj-58", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 7 ],
					"source" : [ "obj-6", 7 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 6 ],
					"source" : [ "obj-6", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 5 ],
					"source" : [ "obj-6", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 4 ],
					"source" : [ "obj-6", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 3 ],
					"source" : [ "obj-6", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 2 ],
					"source" : [ "obj-6", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 1 ],
					"source" : [ "obj-6", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"source" : [ "obj-60", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 2 ],
					"source" : [ "obj-61", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-61", 1 ],
					"midpoints" : [ 1502.756335139274597, 283.815785884857178, 1352.453617300306178, 283.815785884857178 ],
					"source" : [ "obj-62", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-61", 0 ],
					"source" : [ "obj-62", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-62", 0 ],
					"source" : [ "obj-68", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-62", 0 ],
					"source" : [ "obj-70", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-42", 0 ],
					"source" : [ "obj-72", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-73", 0 ],
					"hidden" : 1,
					"source" : [ "obj-72", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-74", 0 ],
					"hidden" : 1,
					"source" : [ "obj-72", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-75", 0 ],
					"hidden" : 1,
					"source" : [ "obj-72", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-77", 0 ],
					"hidden" : 1,
					"source" : [ "obj-73", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-78", 0 ],
					"hidden" : 1,
					"source" : [ "obj-74", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-79", 0 ],
					"hidden" : 1,
					"source" : [ "obj-75", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-72", 7 ],
					"hidden" : 1,
					"source" : [ "obj-77", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-72", 6 ],
					"hidden" : 1,
					"source" : [ "obj-78", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-72", 5 ],
					"hidden" : 1,
					"source" : [ "obj-79", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 7 ],
					"source" : [ "obj-8", 7 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 6 ],
					"source" : [ "obj-8", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 5 ],
					"source" : [ "obj-8", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 4 ],
					"source" : [ "obj-8", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 3 ],
					"source" : [ "obj-8", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 2 ],
					"source" : [ "obj-8", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 1 ],
					"source" : [ "obj-8", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-72", 0 ],
					"source" : [ "obj-80", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-87", 0 ],
					"order" : 2,
					"source" : [ "obj-81", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-90", 0 ],
					"order" : 1,
					"source" : [ "obj-81", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-92", 1 ],
					"order" : 0,
					"source" : [ "obj-81", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-70", 0 ],
					"source" : [ "obj-87", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-62", 0 ],
					"source" : [ "obj-89", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-89", 0 ],
					"source" : [ "obj-90", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 3 ],
					"source" : [ "obj-93", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 3 ],
					"source" : [ "obj-93", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-94", 0 ],
					"source" : [ "obj-95", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-17" : [ "amxd~", "amxd~", 0 ],
			"obj-18" : [ "amxd~[1]", "amxd~[1]", 0 ],
			"obj-22" : [ "amxd~[2]", "amxd~[2]", 0 ],
			"obj-27" : [ "number", "number", 0 ],
			"obj-44" : [ "amxd~[3]", "amxd~[3]", 0 ],
			"obj-8::obj-11" : [ "live.gain~", "mc.live.gain~", 0 ],
			"obj-8::obj-12" : [ "live.gain~[1]", "mc.live.gain~", 0 ],
			"obj-8::obj-13" : [ "live.gain~[2]", "mc.live.gain~", 0 ],
			"obj-8::obj-14" : [ "live.gain~[3]", "mc.live.gain~", 0 ],
			"obj-8::obj-15" : [ "live.gain~[4]", "mc.live.gain~", 0 ],
			"obj-8::obj-16" : [ "live.gain~[5]", "mc.live.gain~", 0 ],
			"obj-8::obj-17" : [ "live.gain~[6]", "mc.live.gain~", 0 ],
			"obj-8::obj-18" : [ "live.gain~[7]", "mc.live.gain~", 0 ],
			"obj-93" : [ "amxd~[4]", "amxd~[4]", 0 ],
			"parameterbanks" : 			{

			}
,
			"inherited_shortname" : 1
		}
,
		"dependency_cache" : [ 			{
				"name" : "Analogue Drums.amxd",
				"bootpath" : "C74:/packages/Max for Live/patchers/Max Instrument/Analogue Drums",
				"type" : "amxd",
				"implicit" : 1
			}
, 			{
				"name" : "Analogue Drums.amxd.maxsnap",
				"bootpath" : "~/OneDrive/Documents/Max 8/Snapshots",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Snapshots",
				"type" : "mx@s",
				"implicit" : 1
			}
, 			{
				"name" : "Bassline.amxd",
				"bootpath" : "C74:/packages/Max for Live/patchers/Max Instrument/Bassline",
				"type" : "amxd",
				"implicit" : 1
			}
, 			{
				"name" : "Bassline.amxd.maxsnap",
				"bootpath" : "~/OneDrive/Documents/Max 8/Snapshots",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Snapshots",
				"type" : "mx@s",
				"implicit" : 1
			}
, 			{
				"name" : "Big Ben Bell.amxd",
				"bootpath" : "C74:/packages/Max for Live/patchers/Max Instrument/Big Ben Bell",
				"type" : "amxd",
				"implicit" : 1
			}
, 			{
				"name" : "Big Ben Bell.amxd.maxsnap",
				"bootpath" : "~/OneDrive/Documents/Max 8/Snapshots",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Snapshots",
				"type" : "mx@s",
				"implicit" : 1
			}
, 			{
				"name" : "ChamberVerb.amxd",
				"bootpath" : "C74:/packages/Max for Live/patchers/Max Audio Effect/Chamberverb",
				"type" : "amxd",
				"implicit" : 1
			}
, 			{
				"name" : "ChamberVerb.amxd.maxsnap",
				"bootpath" : "~/OneDrive/Documents/Max 8/Snapshots",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Snapshots",
				"type" : "mx@s",
				"implicit" : 1
			}
, 			{
				"name" : "Comber.amxd",
				"bootpath" : "C74:/packages/Max for Live/patchers/Max Audio Effect/Comber",
				"type" : "amxd",
				"implicit" : 1
			}
, 			{
				"name" : "Comber.amxd.maxsnap",
				"bootpath" : "~/OneDrive/Documents/Max 8/Snapshots",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Snapshots",
				"type" : "mx@s",
				"implicit" : 1
			}
, 			{
				"name" : "isthatyou.aiff",
				"bootpath" : "C74:/docs/tutorial-patchers/msp-tut",
				"type" : "AIFF",
				"implicit" : 1
			}
, 			{
				"name" : "o.accum.maxpat",
				"bootpath" : "~/OneDrive/Documents/Max 8/Packages/CNMAT-odot/patchers/namespace",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Packages/CNMAT-odot/patchers/namespace",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "o.append.mxe64",
				"type" : "mx64"
			}
, 			{
				"name" : "o.collect.mxe64",
				"type" : "mx64"
			}
, 			{
				"name" : "o.compose.mxe64",
				"type" : "mx64"
			}
, 			{
				"name" : "o.expr.codebox.mxe64",
				"type" : "mx64"
			}
, 			{
				"name" : "o.if.mxe64",
				"type" : "mx64"
			}
, 			{
				"name" : "o.jm.korgnanokontrol.buttonhelper.maxpat",
				"bootpath" : "~/OneDrive/Documents/Max 8/Patches/o.jm.korgnanokontrol",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Patches/o.jm.korgnanokontrol",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "o.jm.korgnanokontrol.encoderhelper.maxpat",
				"bootpath" : "~/OneDrive/Documents/Max 8/Patches/o.jm.korgnanokontrol",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Patches/o.jm.korgnanokontrol",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "o.jm.korgnanokontrol.gains~.maxpat",
				"bootpath" : "~/OneDrive/Documents/Max 8/Patches/o.jm.korgnanokontrol",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Patches/o.jm.korgnanokontrol",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "o.jm.korgnanokontrol.maxpat",
				"bootpath" : "~/OneDrive/Documents/Max 8/Patches/o.jm.korgnanokontrol",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Patches/o.jm.korgnanokontrol",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "o.jm.korgnanokontrol.m~.maxpat",
				"bootpath" : "~/OneDrive/Documents/Max 8/Patches/o.jm.korgnanokontrol",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Patches/o.jm.korgnanokontrol",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "o.jm.korgnanokontrol.r~.maxpat",
				"bootpath" : "~/OneDrive/Documents/Max 8/Patches/o.jm.korgnanokontrol",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Patches/o.jm.korgnanokontrol",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "o.jm.korgnanokontrol.s~.maxpat",
				"bootpath" : "~/OneDrive/Documents/Max 8/Patches/o.jm.korgnanokontrol",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Patches/o.jm.korgnanokontrol",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "o.pack.mxe64",
				"type" : "mx64"
			}
, 			{
				"name" : "o.prepend.mxe64",
				"type" : "mx64"
			}
, 			{
				"name" : "o.righttoleft.maxpat",
				"bootpath" : "~/OneDrive/Documents/Max 8/Packages/CNMAT-odot/patchers/ordering",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Packages/CNMAT-odot/patchers/ordering",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "o.route.mxe64",
				"type" : "mx64"
			}
, 			{
				"name" : "o.select.mxe64",
				"type" : "mx64"
			}
, 			{
				"name" : "o.union.mxe64",
				"type" : "mx64"
			}
, 			{
				"name" : "thru.maxpat",
				"bootpath" : "C74:/patchers/m4l/Pluggo for Live resources/patches",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "toggle_m.js",
				"bootpath" : "~/OneDrive/Documents/Max 8/Library/o.jm.korgnanokontrol-main/o.jm.korgnanokontrol-main/javascript",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Library/o.jm.korgnanokontrol-main/o.jm.korgnanokontrol-main/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "toggle_r.js",
				"bootpath" : "~/OneDrive/Documents/Max 8/Library/o.jm.korgnanokontrol-main/o.jm.korgnanokontrol-main/javascript",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Library/o.jm.korgnanokontrol-main/o.jm.korgnanokontrol-main/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "toggle_s.js",
				"bootpath" : "~/OneDrive/Documents/Max 8/Library/o.jm.korgnanokontrol-main/o.jm.korgnanokontrol-main/javascript",
				"patcherrelativepath" : "../../../../../Users/garre/OneDrive/Documents/Max 8/Library/o.jm.korgnanokontrol-main/o.jm.korgnanokontrol-main/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
