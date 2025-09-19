export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label> <br /><br />
        <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
  
        <textarea id="wd-description" defaultValue="The assignment is available online. Submit a link to the landing page of"></textarea>
        <br />
  
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" defaultValue={100} />
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select defaultValue="ASSIGNMENT GROUP" id="wd-group">
                  <option value="ASSIGNMENT GROUP">ASSIGNMENTS</option>
                </select>
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select defaultValue="PERCENTAGE" id="wd-display-grade-as">
                  <option value="PERCENTAGE">Percentage</option>
                </select>
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select defaultValue="ONLINE" id="wd-submission-type">
                  <option value="ONLINE">Online</option>
                </select>
                <br /><br />
                <label>Online Entry Options</label><br />
  
                <input type="checkbox" name="check-options" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label><br />
  
                <input type="checkbox" name="check-options" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label><br />
  
                <input type="checkbox" name="check-options" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label><br />
  
                <input type="checkbox" name="check-options" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label><br />
  
                <input type="checkbox" name="check-options" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Upload</label><br /><br />
  
                <label htmlFor="wd-assign-to">Assign To</label><br />
                <input id="wd-assign-to" defaultValue="Everyone" /><br /><br />
  
                <label htmlFor="wd-due-date">Due</label><br />
                <input type="date" defaultValue="2024-05-13" id="wd-due-date" /><br /><br />
  
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="wd-available-from">Available From</label><br />
                        <input type="date" id="wd-available-from" defaultValue="2024-05-06" />
                      </td>
                      <td>
                        <label htmlFor="wd-available-until">Available Until</label><br />
                        <input type="date" id="wd-available-until" defaultValue="2024-05-06" />
                      </td>
                    </tr>
                  </tbody> 
                </table> <br />
                <div style={{ textAlign: "right" }}>
                    <button>Cancel</button>
                    <button>Save</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  