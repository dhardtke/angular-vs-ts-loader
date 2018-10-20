import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub831Component} from "./stub831.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub831Component
        }])
    ],
    declarations: [
        Stub831Component
    ]
})
export class Stub831Module {

}
