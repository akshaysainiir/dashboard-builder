export function mockDashboard() {
    return `
    <!DOCTYPE html>
    <html lang="en">
       <head><script type="text/javascript">
       Prognosis.Navigation.currentUrl = "CiscoWebex-MeetingsQualityList?";
       Prognosis.Navigation.currentUrlRaw = "CiscoWebex-MeetingsQualityList?";
    </script><script type="text/javascript">
                document.title = 'CiscoWebex-MeetingsQualityList';
             </script><script type="text/javascript">
                $(document).ready(function () {
                   Prognosis.globals.promptResolver = new Prognosis.PromptResolver({ }, {});
                });
             </script><script type="text/javascript">
    $(document).ready(function() {
    var htmlWindow = new Prognosis.DashboardHtmlWindow();
    htmlWindow.setConfig({ guid: "e483e62a-410a-4ca9-b122-7e7b4d303a5f",
    name: "Filter_component_CiscoWebex_MeetingsQualityInProgressMeetingList",
    });
    Prognosis.globals.windows["Filter_component_CiscoWebex_MeetingsQualityInProgressMeetingList"] = htmlWindow;
    });
    </script><script type="text/javascript">
    $(document).ready(function() {
    var htmlWindow = new Prognosis.DashboardHtmlWindow();
    htmlWindow.setConfig({ guid: "cc1d8fe7-0542-4471-8104-8257196cb61c",
    name: "Cisco_Webex_Meeting_List_CiscoWebex_MeetingsQualityInProgressMeetingList",
    });
    Prognosis.globals.windows["Cisco_Webex_Meeting_List_CiscoWebex_MeetingsQualityInProgressMeetingList"] = htmlWindow;
    });
    </script></head>
       <style>
          .dashboard {
             height: calc(100% - 34px);
             width: calc(100% - 1.5em);
             position: absolute;
             top: 34px;
             bottom: 0px;
             left: 0px;
             background: var(--dashboard-background);
          }
          .window {
             background: var(--window-background);
          }
          query, drilldown, visualalarm, series {
             display: none;
          }
          #id_Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList {
             position: absolute;
             left: 0% !important;
             top: 0% !important;
             height: 6% !important;
             width: 100% !important;
             border-left: 1em var(--dashboard-background) solid !important;
             border-top: 0.5em var(--dashboard-background) solid !important;
             border-bottom: 0.5em var(--dashboard-background) solid !important;
          }
          #id_ClassFilter_CiscoWebex_MeetingsQualityInProgressMeetingList {
             position: absolute;
             left: 50% !important;
             top: 6% !important;
             height: 6% !important;
             width: 50% !important;
             border-left: 1em var(--dashboard-background) solid !important;
             border-top: 0.5em var(--dashboard-background) solid !important;
             border-bottom: 0.5em var(--dashboard-background) solid !important;
          }
          #id_Filter_component_CiscoWebex_MeetingsQualityInProgressMeetingList {
             position: absolute;
             left: 0% !important;
             top: 6% !important;
             height: 6% !important;
             width: 50% !important;
             border-left: 1em var(--dashboard-background) solid !important;
             border-top: 0.5em var(--dashboard-background) solid !important;
             border-bottom: 0.5em var(--dashboard-background) solid !important;
          }
          #id_Title {
             position: absolute;
             left: 0% !important;
             top: 0% !important;
             height: 34px !important;
             width: 100% !important;
             background: var(--dashboard-background);
             border-left: 1em var(--dashboard-background) solid !important;
          }
          #id_Cisco_Webex_Meeting_List_CiscoWebex_MeetingsQualityInProgressMeetingList {
             position: absolute;
             left: 0% !important;
             top: 12% !important;
             height: 88% !important;
             width: 100% !important;
             border-left: 1em var(--dashboard-background) solid !important;
             border-top: 0.5em var(--dashboard-background) solid !important;
             border-bottom: 0.5em var(--dashboard-background) solid !important;
          }
       </style>
       <body><ul class="dashboardPanelControls list-unstyled"><li>
       <form action="/Prognosis/Dashboard/CiscoWebex-MeetingsQualityList" id="exportForm" method="post" onsubmit="$('#dashboardData').val($('<div/>').text(JSON.stringify(WebUIComponents.startExcelExport())).html())" target="exportIFrame">
          <input name="__RequestVerificationToken" type="hidden" value="ICFu-wrqVLrusk9dpl01OGghgDr3SCCqlJtGaD1DZNR4_3F96psxRe0aKY5ijM5hsFdAKQNc_7ubvsDl9xAsNkWRXbU1:wNFjw2pU5d1pxkfvaCKNqTCt727SJNfAhrzBrS5drGKkUhXd3E7X-vJKddFAKaUMtHkYfUDWkLY3XqUXsEnAEYZyotlCUonT0_Ojgv9_ooUH285l0">
          <div>
             <input id="dashboardData" name="dashboardData" type="hidden" value="val">
             <a title="Excel Export" href="javascript: void(0)" onclick="$(&quot;#exportForm&quot;).trigger(&quot;submit&quot;);" id="idHtml_AppBar_ExcelExport" type="submit" class="disableOnMashupLink noprint">
                <span class="dashboardPanelControlsText">Excel Export</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 64 64" style="width: 20px; height: 20px; vertical-align: middle;">
                   <path id="file_x5F_send" d="M55.923,33.382c0.101-0.243,0.101-0.521,0-0.764c-0.051-0.123-0.124-0.233-0.217-0.325
                   l-7.999-8c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L52.586,32H25c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1h27.586
                   l-6.293,6.293c-0.391,0.391-0.391,1.023,0,1.414C46.488,41.902,46.744,42,47,42s0.512-0.098,0.707-0.293l7.999-7.999
                   C55.799,33.615,55.872,33.505,55.923,33.382z M43.707,17.293l-11-11C32.52,6.105,32.265,6,32,6H12c-2.206,0-4,1.794-4,4v40
                   c0,2.206,1.794,4,4,4h28c2.206,0,4-1.794,4-4V39c0-0.553-0.448-1-1-1s-1,0.447-1,1v11c0,1.104-0.896,2-2,2H12c-1.103,0-2-0.896-2-2
                   V10c0-1.103,0.897-2,2-2h18v8c0,2.206,1.794,4,4,4h8v7c0,0.553,0.448,1,1,1s1-0.447,1-1v-9C44,17.734,43.895,17.48,43.707,17.293z
                   M32,16V8.414L41.586,18H34C32.896,18,32,17.103,32,16z"></path>
                </svg>
             </a>
             <iframe id="exportIFrame" name="exportIFrame" src="" style="width: 0; height: 0; display: none; " onload=""></iframe>
          </div>
       </form>
    </li><li>
       <div>
          <a title="Print" href="javascript: void(0)" onclick="Prognosis.Export.exportDataPrint();" id="idHtml_AppBar_PrettyPrint" class="disableOnMashupLink noprint">
             <span class="dashboardPanelControlsText">Print</span>
             <g id="44px-Line" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="com-printer"></g>
                <svg viewbox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                   <path id="com-printer" d="M38,12 L34,12 L34,8 C34,7.734 33.895,7.48 33.707,7.293 L26.707,0.293 C26.52,0.105
                      26.265,0 26,0 L9,0 C8.448,0 8,0.447 8,1 L8,12 L4,12 C1.794,12 0,13.794 0,16 L0,30
                      C0,32.206 1.794,34 4,34 L8,34 L8,43 C8,43.553 8.448,44 9,44 L33,44 C33.552,44 34,43.553
                      34,43 L34,34 L38,34 C40.206,34 42,32.206 42,30 L42,16 C42,13.794 40.206,12 38,12 L38,12
                      Z M31.586,8 L26,8 L26,2.414 L31.586,8 L31.586,8 Z M10,2 L24,2 L24,9 C24,9.553 24.448,10
                      25,10 L32,10 L32,18 L10,18 L10,2 L10,2 Z M32,42 L10,42 L10,28 L32,28 L32,42 L32,42 Z
                      M40,30 C40,31.103 39.103,32 38,32 L34,32 L34,27 C34,26.447 33.552,26 33,26 L9,26 C8.448,26
                      8,26.447 8,27 L8,32 L4,32 C2.897,32 2,31.103 2,30 L2,16 C2,14.897 2.897,14 4,14 L8,14 L8,19
                      C8,19.553 8.448,20 9,20 L33,20 C33.552,20 34,19.553 34,19 L34,14 L38,14 C39.103,14 40,14.897
                      40,16 L40,30 L40,30 Z"></path>
                </svg>
             </g>
          </a>
       </div>
    </li></ul>
          <div class="window Title_css" name="Title" id="id_Title">
             <script type="text/javascript">
                $(function() {
                   WebUIComponents.renderTitle("webui-title-Title", "Meetings List - @customer", "customer");
                });
             </script>
             <div id="webui-title-Title"></div>
          </div>
          <div class="dashboard">
    <!-- ************** Class Filter Component ************* -->
       <div class="window" name="ClassFilter_CiscoWebex_MeetingsQualityInProgressMeetingList" id="id_ClassFilter_CiscoWebex_MeetingsQualityInProgressMeetingList">
          <script>
             $(function() {
                var filterControlConfiguration = {
                reset: false,
                selects: 
                   [
                      {
                         id: "Class", 
                         label: "User Class",
                         width: "100px",
                         options:
                         [
                            { value:"0", label:"All"},
                            { value:"1", label:"VIP"},
                            { value:"2", label:"New User"},
                            { value:"4", label:"Guest"},
                         ]
                      },
                      {
                         id: "NameFilter", 
                         label: "",
                         width: "100%",
                         type: "TextBox",
                         txtsearch: "Host Name & Title Filter",
                         options: [ { value:"" } ]
                       }
                   ]
                };
    
                WebUIComponents.renderFilterControl("ClassFilter_CiscoWebex_MeetingsQualityInProgressMeetingList", filterControlConfiguration);
             });
          </script>
          <div id="ClassFilter_CiscoWebex_MeetingsQualityInProgressMeetingList"></div>
       </div>
          <div class="window" name="Cisco_Webex_Meeting_List_CiscoWebex_MeetingsQualityInProgressMeetingList" id="id_Cisco_Webex_Meeting_List_CiscoWebex_MeetingsQualityInProgressMeetingList">
             <script>
                $(function() {
                    var Cisco_Webex_Meeting_List_CiscoWebex_MeetingsQualityInProgressMeetingList_configuration = {
                "windowName": "Cisco_Webex_Meeting_List_CiscoWebex_MeetingsQualityInProgressMeetingList",
                "pagination": {
                  "defaultPageSize": 25,
                  "pageSizeOptions": [25, 50, 100],
                  "showSizeChanger": true,
                  "showTotal": (total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`
                },
                "columns": [
        {
          "title": "Host Name",
          "dataIndex": "ciscowebexmeeting_hostdisplayname",
          "precision": 0,
          "basicSorting": true,
          "textFilter": true,
          "ellipsis": true,
          "drilldown": 'CiscoWebex-UserInsightsUserDetails?DefaultNode=@DefaultNode&customer=@Customer&User=@CiscoWebexMeeting_HostDisplayName&UserId=@ciscowebexmeeting_hostemail',
          "description": "FIELD: HostDisplayName\\nHost display name.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 120
        },
        {
          "title": "Title",
          "dataIndex": "ciscowebexmeeting_title",
          "precision": 0,
          "basicSorting": true,
          "textFilter": true,
          "ellipsis": true,
          "drilldown": 'CiscoWebex-MeetingsQualityDetails?DefaultNode=@DefaultNode&Customer=@Customer&MeetingId=@CiscoWebexMeeting_Id&MeetingTitle=@ciscowebexmeeting_title&StartTime=@ciscowebexmeeting_starttime',
          "description": "FIELD: Title\\nThe title of meeting.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 200
        },
        {
          "title": "Start Time",
          "dataIndex": "ciscowebexmeeting_starttime",
          "precision": 0,
          "basicSorting": true,
          "textFilter": true,
          "ellipsis": true,
          "description": "FIELD: StartTime\\nStart time.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 140
        },
        {
          "title": "Participants",
          "dataIndex": "ciscowebexmeeting_numberofparticipants",
          "precision": 0,
          "basicSorting": true,
          "ellipsis": true,
          "description": "FIELD: NumberOfParticipants\\nNumber of participants.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 90
        },
        {
          "title": "Server Regions",
          "dataIndex": "ciscowebexmeeting_serverregions",
          "precision": 0,
          "basicSorting": true,
          "ellipsis": true,
          "description": "FIELD: ServerRegions\\nServer region name if there is one region, or number of regions if multiple.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 100
        },
        {
          "title": "Poor Streams",
          "dataIndex": "CiscoWebexMeeting_NumberOfPoorStreams",
          "precision": 0,
          "basicSorting": true,
          "ellipsis": true,
          "cellCallback": NumberOfPoorStreamsVA,
          "description": "FIELD: NumberOfPoorStreams\\nNumber of poor streams.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 95
        },
        {
          "title": "Average Audio MOS",
          "dataIndex": "ciscowebexmeeting_averageaudiomos",
          "precision": 2,
          "basicSorting": true,
          "textFilter": true,
          "cellCallback": AverageAudioMOSVA,
          "description": "FIELD: AverageAudioMOS\\nAverage audio MOS, across all sessions, combine in and out streams.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 125
        },
        {
          "title": "Average Audio Jitter ",
          "dataIndex": "ciscowebexmeeting_averageaudiojitter",
          "precision": 2,
          "basicSorting": true,
          "textFilter": true,
          "cellCallback": AverageAudioJitterVA,
          "description": "FIELD: AverageAudioJitter\\nStream average audio jitter.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 125
        },
        {
          "title": "Average Audio Latency",
          "dataIndex": "ciscowebexmeeting_averageaudiolatency",
          "precision": 2,
          "basicSorting": true,
          "textFilter": true,
          "cellCallback": AverageAudioLatencyVA,
          "description": "FIELD: AverageAudioLatency\\nStream average audio latency.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 125
        },
        {
          "title": "Average Audio Packet Loss",
          "dataIndex": "ciscowebexmeeting_averageaudiopacketloss",
          "precision": 2,
          "basicSorting": true,
          "textFilter": true,
          "cellCallback": AverageAudioPacketLossVA,
          "description": "FIELD: AverageAudioPacketLoss\\nStream average audio packet loss.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 125
        },
        {
          "title": "Average Video Quality",
          "dataIndex": "CiscoWebexMeeting_AverageVideoQualityScore",
          "precision": 2,
          "basicSorting": true,
          "textFilter": true,
          "cellCallback": AverageVideoQualityScoreVA,
          "description": "FIELD: AverageVideoQualityScore\\nAverage video Quality, across all sessions, combine in and out streams.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 125
        },
        {
          "title": "Average Screen Share Quality",
          "dataIndex": "CiscoWebexMeeting_AverageScreenShareQualityScore",
          "precision": 2,
          "basicSorting": true,
          "textFilter": true,
          "cellCallback": AverageScreenShareQualityScoreVA,
          "description": "FIELD: AverageScreenShareQualityScore\\nAverage screen share Quality, across all sessions, combine in and out streams.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 125
        },
        {
          "title": "Average System CPU",
          "dataIndex": "ciscowebexmeeting_systemaveragecpu",
          "precision": 2,
          "basicSorting": true,
          "textFilter": true,
          "cellCallback": AverageCPUVA,
          "description": "FIELD: SystemAverageCPU\\nAverage CPU of the machine where the Webex client is running.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 90
        },
        {
          "title": "Average Process CPU",
          "dataIndex": "ciscowebexmeeting_processaveragecpu",
          "precision": 2,
          "basicSorting": true,
          "textFilter": true,
          "cellCallback": AverageCPUVA,
          "description": "FIELD: ProcessAverageCPU\\nAverage CPU of the Webex client process.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 90
        },
        {
          "title": "SIP Address",
          "dataIndex": "ciscowebexmeeting_sipaddress",
          "precision": 0,
          "basicSorting": true,
          "ellipsis": true,
          "description": "FIELD: SIPAddress\\nSIP Address.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 120
        },
        {
          "title": "DialIn IP Address",
          "dataIndex": "ciscowebexmeeting_dialinipaddress",
          "precision": 0,
          "basicSorting": true,
          "ellipsis": true,
          "description": "FIELD: DialInIpAddress\\nDial in IP Address.\\n\\nRECORD: CiscoWebexMeeting\\nCisco Webex meeting",
          "width": 110
        }
      ],
                "resizableColumns": true,
                "view": {"mode":"live"}
                };
                    WebUIComponents.renderTable('webui-table-Cisco_Webex_Meeting_List_CiscoWebex_MeetingsQualityInProgressMeetingList', Cisco_Webex_Meeting_List_CiscoWebex_MeetingsQualityInProgressMeetingList_configuration);
                
                    function AverageAudioMOSVA(value, record) {
                        if(value == '') {
                            return;
                        } else if(value < 3.5) {
                            return {className: 'BgRedRibbonFgWhite'};
                        } else if(value < 3.8) {
                            return {className: 'BgCoronaFgBlack'};
                        } else if(value < 4.0) {
                            return {className: 'BgReefFgBlack'};
                        } else if(value > 3.99) {
                            return {className: 'BgAlgeaGreenFgBlack'};
                        }
                    }
                    
                    function AverageAudioJitterVA(value, record) {
                        if(value == '') {
                            return;
                        } else if(value < 10.0) {
                            return {className: 'BgAlgeaGreenFgBlack'};
                        } else if(value < 20.0) {
                            return {className: 'BgReefFgBlack'};
                        } else if(value < 30.0) {
                            return {className: 'BgCoronaFgBlack'};
                        } else if(value > 29.99) {
                            return {className: 'BgRedRibbonFgWhite'};
                        }
                    }
                    
                    function AverageAudioLatencyVA(value, record) {
                        if(value == '') {
                            return;
                        } else if(value < 101.0) {
                            return {className: 'BgAlgeaGreenFgBlack'};
                        } else if(value < 201.0) {
                            return {className: 'BgReefFgBlack'};
                        } else if(value < 301.0) {
                            return {className: 'BgCoronaFgBlack'};
                        } else if(value > 300.99) {
                            return {className: 'BgRedRibbonFgWhite'};
                        }
                    }
                    
                    function AverageAudioPacketLossVA(value, record) {
                        if(value == '') {
                            return;
                        } else if(value < 1.0) {
                            return {className: 'BgAlgeaGreenFgBlack'};
                        } else if(value < 5.0) {
                            return {className: 'BgReefFgBlack'};
                        } else if(value < 10.0) {
                            return {className: 'BgCoronaFgBlack'};
                        } else if(value > 9.99) {
                            return {className: 'BgRedRibbonFgWhite'};
                        }
                    }
                    
                    function AverageVideoQualityScoreVA(value, record) {
                        if(value == '') {
                            return;
                        } else if(value == 0) {
                            return;
                        } else if(value < 2.5) {
                            return {className: 'BgCoronaFgBlack'};
                        } else if(value < 3.5) {
                            return {className: 'BgReefFgBlack'};
                        } else if(value > 3.49) {
                            return {className: 'BgAlgeaGreenFgBlack'};
                        }
                    }
                    
                    function AverageScreenShareQualityScoreVA(value, record) {
                        if(value == '') {
                            return;
                        } else if(value < 2.5) {
                            return {className: 'BgCoronaFgBlack'};
                        } else if(value < 3.5) {
                            return {className: 'BgReefFgBlack'};
                        } else if(value > 3.49) {
                            return {className: 'BgAlgeaGreenFgBlack'};
                        }
                    }
                    
                    function NumberOfPoorStreamsVA(value, record) {
                        if(value == '') {
                            return;
                        } else if(value > 0) {
                            return {className: 'BgRoseFgWhite'};
                        } else if(value == 0) {
                            return {className: 'BgAlgeaGreenFgBlack'};
                        }
                    }
                    
                    function AverageCPUVA(value, record) {
                        if(value == '') {
                            return;
                        } else if(value > 89.99) {
                            return {className: 'BgRedRibbonFgWhite'};
                        } else if(value > 79.99) {
                            return {className: 'BgCoronaFgBlack'};
                        } else if(value < 80.0) {
                            return {className: 'BgAlgeaGreenFgBlack'};
                        }
                    }
                });
             </script>
             <div id='webui-table-Cisco_Webex_Meeting_List_CiscoWebex_MeetingsQualityInProgressMeetingList'></div>
             <series>
                <query>SELECT
        TOP 1000
        HostDisplayName AS ciscowebexmeeting_hostdisplayname,
        HostEmail AS ciscowebexmeeting_hostemail,
        StartTime AS ciscowebexmeeting_starttime,
        NumberOfParticipants AS ciscowebexmeeting_numberofparticipants,
        Id AS ciscowebexmeeting_id,
        Title AS CiscoWebexMeeting_Title,
        SystemAverageCPU AS CiscoWebexMeeting_SystemAverageCPU,
        ProcessAverageCPU AS CiscoWebexMeeting_ProcessAverageCPU,
        NumberOfPoorStreams AS CiscoWebexMeeting_NumberOfPoorStreams,
        AverageScreenShareQualityScore AS CiscoWebexMeeting_AverageScreenShareQualityScore,
        AverageVideoQualityScore AS CiscoWebexMeeting_AverageVideoQualityScore,
        ServerRegions AS ciscowebexmeeting_serverregions,
        AverageAudioMOS AS ciscowebexmeeting_averageaudiomos,
        AverageAudioJitter AS ciscowebexmeeting_averageaudiojitter,
        AverageAudioLatency AS ciscowebexmeeting_averageaudiolatency,
        AverageAudioPacketLoss AS ciscowebexmeeting_averageaudiopacketloss,
        SIPAddress AS ciscowebexmeeting_sipaddress,
        DialInIpAddress AS ciscowebexmeeting_dialinipaddress,
        Customer
    FROM CiscoWebexMeeting
    WHERE (Customer = @customer) AND ((@NameFilter IS NULL) OR (HostDisplayName MATCHES @NameFilter) OR (Title MATCHES @NameFilter)) AND ((@Class = 0) OR (MaxParticipantClass = @Class) OR  (MaxParticipantClass = 3 AND (@Class = 1 OR @Class = 2)) OR (MaxParticipantClass = 5 AND (@Class = 1 OR @Class = 4 )) OR (MaxParticipantClass = 7 AND (@Class = 1 OR @Class = 2 OR @Class = 4))) 
    NODE @DefaultNode
    ORDER BY ciscowebexmeeting_starttime DESC, ciscowebexmeeting_averageaudiomos
    </query>
             </series>
          </div>
             <div class="window" name="Filter_component_CiscoWebex_MeetingsQualityInProgressMeetingList" id="id_Filter_component_CiscoWebex_MeetingsQualityInProgressMeetingList" style="display: flex;align-items: center;">
                <script>
                  $(function() {
                     var Links_CiscoWebex_MeetingsQualityInProgressMeetingList_configuration = {
                     "windowName": "Filter_component_CiscoWebex_MeetingsQualityInProgressMeetingList",
                     "showHeader": false,
                     "disableAutoFit": true,
                     "resizableColumns": true,
                     "positionCentred": true,
                     "columns": [
                     {
                       "title": "Historical Meetings",
                       "dataIndex": "HistoricalLink",
                       "description": "",
                       "width": 125
                     },
                     {
                       "title": "In-Progress Meetings",
                       "dataIndex": "InProgressLink",
                       "cellCallback": () => {return {className: 'BgMediumBlueFgWhite'}},
                       "description": "",
                       "width": 125
                     }
                 ]
                };
                WebUIComponents.renderTable('webui-table-Links_CiscoWebex_MeetingsQualityInProgressMeetingList', Links_CiscoWebex_MeetingsQualityInProgressMeetingList_configuration);
            });
            </script>
            <div id='webui-table-Links_CiscoWebex_MeetingsQualityInProgressMeetingList'></div>
        <series>
        <query>SELECT
        'Historical Meetings' AS HistoricalLink,
        'In-Progress Meetings' AS InProgressLink
         </query>
        </series>
        <drilldown><query>SELECT
        'CiscoWebex-MeetingsQualityListHistorical?DefaultNode=' + URIENCODE(COALESCE(@DefaultNode, ''))  + '&customer=' + URIENCODE(COALESCE(@customer, '')) AS HistoricalLink,
        CASE WHEN isproductlicensed('CWL') THEN 'CiscoWebex-MeetingsQualityList?DefaultNode=' + URIENCODE(COALESCE(@DefaultNode, '')) + '&Customer=' + URIENCODE(COALESCE(@Customer, '')) ELSE '' END AS InProgressLink
        </query></drilldown>
             </div>
             <div class="window" name="Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList" id="id_Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList" style="display: flex;align-items: center;">
                <div class="window" name="Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList_0" id="id_Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList_0" style="margin-left: 15px;">
                   <script type="text/javascript">
                      $(function() {
                         WebUIComponents.renderLink("webui-link-Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList_0", "Meetings Quality", "CiscoWebex-MeetingsQuality?DefaultNode=@DefaultNode&Customer=@Customer");
                      });
                   </script>
                   <div id="webui-link-Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList_0"></div>
                </div>
                <div class="window" name="Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList_1" id="id_Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList_1" style="margin-left: 15px;">
                   <script type="text/javascript">
                      $(function() {
                         WebUIComponents.renderLink("webui-link-Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList_1", "Meetings List", "CiscoWebex-MeetingsQualityList?DefaultNode=@DefaultNode&Customer=@Customer", true);
                      });
                   </script>
                   <div id="webui-link-Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList_1"></div>
                </div>
                <div class="window" name="Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList_2" id="id_Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList_2" style="margin-left: 15px;">
                   <script type="text/javascript">
                      $(function() {
                         WebUIComponents.renderLink("webui-link-Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList_2", "Sessions List", "CiscoWebex-MeetingsQualitySessionList?DefaultNode=@DefaultNode&Customer=@Customer&title=@customer");
                      });
                   </script>
                   <div id="webui-link-Meeting_Links_CiscoWebex_MeetingsQualityInProgressMeetingList_2"></div>
                </div>
             </div>
       </div></body>
    </html>`
  }