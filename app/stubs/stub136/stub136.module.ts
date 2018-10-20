import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub136Component} from "./stub136.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub136Component
        }])
    ],
    declarations: [
        Stub136Component
    ]
})
export class Stub136Module {

}
