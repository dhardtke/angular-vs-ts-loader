import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub283Component} from "./stub283.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub283Component
        }])
    ],
    declarations: [
        Stub283Component
    ]
})
export class Stub283Module {

}
