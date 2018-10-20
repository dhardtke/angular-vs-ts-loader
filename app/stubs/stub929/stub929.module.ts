import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub929Component} from "./stub929.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub929Component
        }])
    ],
    declarations: [
        Stub929Component
    ]
})
export class Stub929Module {

}
