import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub719Component} from "./stub719.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub719Component
        }])
    ],
    declarations: [
        Stub719Component
    ]
})
export class Stub719Module {

}
